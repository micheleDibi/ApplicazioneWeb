import requests

api_url_get = "https://jsonplaceholder.typicode.com/todos/1"
api_url_post = "https://jsonplaceholder.typicode.com/todos"
api_url_put = "https://jsonplaceholder.typicode.com/todos/10"

# GET
response = requests.get(api_url_get)
print(response.headers['Content-Type'])
if response.status_code == 200:
    print(response.json())
else: print("richiesta GET non valida")

# POST
todo = {'userID': 1,
        'title': 'Comprare il latte',
        'completed': False }
response = requests.post(api_url_post, json=todo)

if response.status_code == 201:
    print(response.json())
    print('Todo creato con successo')

# PUT
response = requests.get(api_url_put)
if response.status_code == 200:
    print(response.json())
    
    response = requests.put(api_url_put, json=todo)
    print(response.json())
    
    if response.status_code == 200:
        print('Todo aggiornato correttamente')

# PATCH    
update = {'title': 'L\'alba dei morti viventi'}
response = requests.patch(api_url_put, json=update)
if response.status_code == 200:
    print(response.json())
    
# DELETE
response = requests.delete(api_url_put)
if response.status_code == 200:
    print ('Todo eliminato!')
