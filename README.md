
Instrukcja bez pobierania:
1. Należy użyć polecenia docker build https://github.com/Wetido/pwcho_e1.git -t (nazwa obrazu)
2. Później używany polecenia docker run docker -p 3000:3000 (nazwa obrazu)
3. Polacz sie z adresem http://localhost:3000 gdzie jest postawiona aplikacja



Instrukcja z pobieraniem:
1. Pobranie repozytorium poleceniem git clone https://github.com/Wetido/pwcho_e1
1. Stworz obraz dockera za pomocą polecenia docker build -t (nazwa obrazu) .
2. Uruchom obraz w kontenerze za pomoca polecenie docker run -p 3000:3000 (nazwa obrazu)
3. Polacz sie z adresem http://localhost:3000 gdzie jest postawiona aplikacja

