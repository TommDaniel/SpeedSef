import json
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.firefox.service import Service
from selenium.webdriver.firefox.options import Options
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

def handler(event, context):
    try:
        AbrirSefaz()
        return {
            'statusCode': 200,
            'body': json.dumps({'message': 'Nota criada com sucesso!'})
        }
    except Exception as e:
        return {
            'statusCode': 500,
            'body': json.dumps({'message': f'Erro ao criar nota: {str(e)}'})
        }

def AbrirSefaz():
    # Configurar o Firefox Developer Edition
    options = Options()
    options.binary_location = "/opt/firefox/firefox"
    # Configurar o GeckoDriver
    service = Service('/usr/local/bin/geckodriver')

    # Inicializar o driver
    driver = webdriver.Firefox(service=service, options=options)
    driver.get('https://www.sefaz.rs.gov.br/nfa/nfe-nfa-mei.aspx')
    time.sleep(2)
    # Esperar até que o iframe esteja presente e então mudar para ele
    wait = WebDriverWait(driver, 30)
    wait.until(EC.frame_to_be_available_and_switch_to_it((By.TAG_NAME, "iframe")))

    # Esperar até que o campo CPF esteja presente
    cpf_field = wait.until(EC.presence_of_element_located((By.NAME, "cpf")))

    # Preencher o campo CPF
    cpf_field.send_keys("03108733044")

    # Esperar até que o campo Data esteja presente
    data_field = wait.until(EC.presence_of_element_located((By.NAME, "datanasc")))

    # Preencher o campo data
    data_field.send_keys("03092002")

    # Esperar até que o campo CNPJ esteja presente
    CNPJ_field = wait.until(EC.presence_of_element_located((By.NAME, "cnpj")))

    # Preencher o campo CNPJ
    CNPJ_field.send_keys("47529662000117")

    name_check = wait.until(EC.presence_of_element_located((By.ID, "rdNomeMae")))
    name_check.click()

    # Esperar até que o campo nome da mae esteja presente
    nome_mae_field = wait.until(EC.presence_of_element_located((By.NAME, "nomemae")))

    # Preencher o campo nome da mae
    nome_mae_field.send_keys("Gislaine Cristina Dombrovski")

    next_check = wait.until(EC.presence_of_element_located((By.CLASS_NAME, "button")))
    next_check.click()

    time.sleep(5)  # Ajuste conforme necessário

    # Trocar para a nova janela
    main_window = driver.current_window_handle
    for handle in driver.window_handles:
        if handle != main_window:
            driver.switch_to.window(handle)
            break
    try:
        alert = wait.until(EC.alert_is_present())
        alert.accept()
        print("Botão OK clicado")
    except:
        print("Nenhum popup com botão OK encontrado")
    # time.sleep(2)
    try:
        alert = wait.until(EC.alert_is_present())
        alert.accept()
        print("Botão OK clicado")
    except:
        print("Nenhum popup com botão OK encontrado")

    wait.until(EC.frame_to_be_available_and_switch_to_it((By.ID, "frmDados")))
    time.sleep(2)
    try:
        ok_check = wait.until(EC.presence_of_element_located((By.ID, "btSim")))
        ok_check.click()
        print("Botão OK clicado")
    except:
        print("Nenhum popup com botão OK encontrado")


