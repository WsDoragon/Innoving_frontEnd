from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import json

def read_json(file_path):
    with open(file_path, 'r') as file:
        data = json.load(file)
    return data

def user_test_decorator(func):
    def wrapper(url, users):
        results = []
        for user in users:
            result = func(url, user=user)
            expected = user["expected_result"]
            test_result = 'PASS' if result == expected else 'FAIL'
            results.append((user['rut'], test_result, expected, result))
            print(f"[{test_result}] Usuario: {user['rut']} | Resultado esperado: {expected} & Resultado obtenido: {result}")
        return results
    return wrapper

@user_test_decorator
def open_window(url, user):
    service = Service(executable_path="chromedriver.exe")
    chrome_options = webdriver.ChromeOptions()
    chrome_options.add_experimental_option('excludeSwitches', ['enable-logging'])
    chrome_options.add_argument("--incognito")
    driver = webdriver.Chrome(service=service, options=chrome_options)

    driver.get(url)

    WebDriverWait(driver, 5).until(EC.presence_of_element_located((By.NAME, "username")))
    input_element = driver.find_element(By.NAME, "username")
    input_element.clear()
    input_element.send_keys(f"{user['rut']}")

    WebDriverWait(driver, 5).until(EC.presence_of_element_located((By.NAME, "password")))
    input_element = driver.find_element(By.NAME, "password")
    input_element.clear()
    input_element.send_keys(f"{user['password']}")

    input_element = driver.find_element(By.NAME, "btnLogin")
    input_element.click()

    WebDriverWait(driver, 10).until(EC.url_changes(url))

    txt_on_page = driver.find_element(By.TAG_NAME, "body").text
    roles_on_site = [role for role in ["Gerente", "Administrador", "Analista"] if role in txt_on_page]

    driver.quit()

    return set(user['roles']) == set(roles_on_site)

def main():
    url = "http://localhost:3000/admin"
    users = read_json('dataTestRF.json')["users"]
    test_results = open_window(url, users)
    
    #for rut, result, expected, actual in test_results:
    #    print(f"[{result}] Usuario: {rut} | Resultado esperado: {expected} & Resultado obtenido: {actual}")

if __name__ == "__main__":
    main()
