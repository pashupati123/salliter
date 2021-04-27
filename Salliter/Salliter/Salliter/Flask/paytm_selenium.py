from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
import pandas as pd
import time
import datetime

browser = webdriver.Chrome(executable_path='/Users/pverma/desktop/Salliter/WEB/back_end/chromedriver')
def ticket_chooser(ticket):
    try:
        ticket_type = browser.find_element_by_xpath("//*[@id='app']/div/div[2]/div/div[2]/div/div[1]/div/div/div[2]/div[1]/div/div[2]/label")
        ticket_type.click()
        print(ticket_type)
    except Exception as e:
        pass



def dep_country_chooser(dep_country):
    fly_from = browser.find_element_by_xpath("//*[@id='text-box']")
    time.sleep(1)
    fly_from.clear()
    time.sleep(1.5)
    fly_from.send_keys('  ' + dep_country)
    time.sleep(1.5)
    first_item = browser.find_element_by_xpath("//*[@id='app']/div/div[2]/div/div[2]/div/div[1]/div/div/div[2]/div[2]/div[1]/div[2]/div/div/div[2]/div/div/div[2]/span")
    time.sleep(1.5)
    first_item.click()
    


def arrival_country_chooser(arrival_country):
    fly_to = browser.find_element_by_xpath("(//*[@id='text-box'])[2]")
    time.sleep(1)
    fly_to.clear()
    time.sleep(1.5)
    fly_to.send_keys('  ' + arrival_country)
    time.sleep(1.5)
    first_item = browser.find_element_by_xpath("//*[@id='app']/div/div[2]/div/div[2]/div/div[1]/div/div/div[2]/div[4]/div[1]/div[2]/div/div/div[2]/div/div/div[2]/span")
    time.sleep(1.5)
    first_item.click()



def dep_date_chooser(date):

    dep_date_button = browser.find_element_by_xpath("//*[@id='datePickerOnward']/div[1]/div/div/div/div/img")
    dep_date_button.click()
    dep_date=browser.find_element_by_xpath("//*[@id='moveToNext']")
    dep_date.click()
    time.sleep(1.5)
    dep_date=browser.find_element_by_xpath("//*[@id='moveToNext']")
    dep_date.click()
    time.sleep(1.5)
    dep_date=browser.find_element_by_xpath("//*[@id='datePickerOnward']/div[2]/div/div[1]/table/tbody/tr[1]/td[3]/div/div/div[2]/span")
    dep_date.click()
    
    #dep_date_button.send_keys(day + '' + month + '' + year)



def search():
    search = browser.find_element_by_xpath("//*[@id='app']/div/div[2]/div/div[2]/div/div[1]/div/div/div[2]/div[8]/div/button")
    search.click()
    time.sleep(15)
    print('Results ready!')



def find():
    prices = browser.find_elements_by_xpath("//*[@id='app']/div/div[2]/div/div/div/div[3]/div[2]/div/div[3]/div[8]/div[1]")
    time.sleep(1.5)
    flight = browser.find_elements_by_xpath("//*[@id='app']/div/div[2]/div/div/div/div[3]/div[2]/div/div[3]/div[2]/div[1]")
    time.sleep(1.5)
    depart_time = browser.find_elements_by_xpath("//*[@id='app']/div/div[2]/div/div/div/div[3]/div[2]/div/div[3]/div[4]/div[1]")
    time.sleep(1.5)
    arrival_time = browser.find_elements_by_xpath("//*[@id='app']/div/div[2]/div/div/div/div[3]/div[2]/div/div[3]/div[6]/div[1]")
    time.sleep(1.5)
    travel_time = browser.find_elements_by_xpath("//*[@id='app']/div/div[2]/div/div/div/div[3]/div[2]/div/div[3]/div[5]/div[1]")
    time.sleep(1.5)
    number_stop = browser.find_elements_by_xpath("//*[@id='app']/div/div[2]/div/div/div/div[3]/div[2]/div/div[3]/div[5]/div[3]")
    flight=[]
    local_map={}
    local_map["flight"]=flight[0].text
    local_map["Price"]=prices[0].text
    local_map["dep_time"]=depart_time[0].text
    local_map["Arrival_time"]=arrival_time[0].text
    local_map["Travel_time"]=travel_time[0].text
    local_map["Number of Stop"]=number_stop[0].text
    '''
    print("flight:",flight[0].text)
    print("Price",prices[0].text)
    print("Depart_time:",depart_time[0].text)
    print("Arrival_time:",arrival_time[0].text)
    print("Travel_time:",travel_time[0].text)
    print("Number of Stop:",number_stop[0].text)
    '''
    flight.append(local_map)
    return flight


def main():
    #browser = webdriver.Chrome(executable_path='/Users/pverma/desktop/Salliter/WEB/back_end/chromedriver')
    round_trip = "//label[@id='roundTrip']"
    one_way = "//label[@id='oneWay']"
    link = 'https://paytm.com/flights'
    browser.get(link)
    time.sleep(5)
    dep_country_chooser('delhi')
    arrival_country_chooser('BLR')
    dep_date_chooser('oct22019')
    search()
    flight=find()
    return flight



# In[ ]:




