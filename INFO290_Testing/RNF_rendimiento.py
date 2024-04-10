from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

import time
import threading
import json
import sys
import datetime

def open_window(url, user, password, rutaTiempo):

    service = Service(executable_path="./chromedriver.exe")
    #driver = webdriver.Chrome(service=service)
    chrome_options = webdriver.ChromeOptions()
    chrome_options.add_argument("--incognito")
    driver = webdriver.Chrome(service=service, options=chrome_options)

    start_time = time.time()
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

    # Write execution time to a text file
    end_time = time.time()
    execution_time = end_time - start_time

    with open(rutaTiempo, 'a') as file:
        file.write(f"{execution_time} \n")

    driver.quit()


def read_json(file_path):
    with open(file_path, 'r') as file:
        data = json.load(file)
    return data

def main():
    if len(sys.argv) != 2:
        print("--> Ingrese cantidad de iteraciones para la prueba de rendimiento\n--> Ejemplo: python RNF_rendimiento.py [N° de iteraciones]")
        sys.exit(1)

    repeticiones = int(sys.argv[1])
            
    threads = []
    # Create a text file

    current_datetime = datetime.datetime.now().strftime("%Y-%m-%d_%H-%M-%S")
    filename_Times = f"times_{current_datetime}.txt"
    rutaTiempo = f"./resultados_RNF/{filename_Times}"

    with open(f"./resultados_RNF/{filename_Times}", 'w') as file:
        file.write('')

    start_time = time.time()
    json_data = read_json('dataTest.json')
    for i in range(0, repeticiones):
        for item in json_data["users"]:
            url = "http://localhost:3000/admin"
            thread = threading.Thread(target=open_window, args=(url, item["rut"], item["password"], rutaTiempo))
            thread.start()
            threads.append(thread)

    for thread in threads:
        thread.join()

    end_time = time.time()
    execution_time = end_time - start_time
    print(f"Execution time: {execution_time} seconds")

    with open(rutaTiempo, 'r') as file:
        tiempos = [float(line) for line in file]

    promedio = sum(tiempos) / len(tiempos)
    print(f"Promedio de intento: {promedio} segundos")

    
    filename = f"results_{current_datetime}.txt"
    with open(f"./resultados_RNF/{filename}", 'w') as file:
        file.write(f"Numero de ejecuciones: {len(tiempos)}\n")
        file.write(f"Tiempo de Ejecucion: {execution_time} segundos\n")
        file.write(f"Promedio de intento: {promedio} segundos\n")

    print(f"Resultados guardados en: ./resultados_RNF/{filename} y ./resultados_RNF/{filename_Times}")

if __name__ == "__main__":
    main()