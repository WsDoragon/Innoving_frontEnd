from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

import time
import json
import random as rand


def open_window(url, user, password):

    service = Service(executable_path="./chromedriver.exe")
    #driver = webdriver.Chrome(service=service)
    chrome_options = webdriver.ChromeOptions()
    chrome_options.add_argument("--incognito")
    driver = webdriver.Chrome(service=service, options=chrome_options)

    driver.get(url)

    WebDriverWait(driver, 5).until(
        EC.presence_of_element_located((By.NAME, "username"))
    )

    input_element = driver.find_element(By.NAME, "username")
    input_element.clear()
    input_element.send_keys(f"{user}")

    WebDriverWait(driver, 5).until(
        EC.presence_of_element_located((By.NAME, "password"))
    )

    input_element = driver.find_element(By.NAME, "password")
    input_element.clear()
    input_element.send_keys(f"{password}")

    input_element = driver.find_element(By.NAME, "btnLogin")
    input_element.click()

    WebDriverWait(driver, 1000).until(EC.url_changes("http://localhost:3000/admin"))

    time.sleep(4)
    driver.quit()


def read_json(file_path):
    with open(file_path, 'r') as file:
        data = json.load(file)
    return data

def main():         
    json_data = read_json('dataTest.json')
    numero_de_usuarios = len(json_data["users"])
    random_user = json_data["users"][rand.randint(0, numero_de_usuarios - 1)]
    
    url = "http://localhost:3000/admin"
    open_window(url, random_user["rut"], random_user["password"])
        
    print("Prueba de funcionalidad Finalizada")

if __name__ == "__main__":
    main()