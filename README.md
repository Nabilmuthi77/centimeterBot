# Centimeter BOT

Starter Project untuk membuat project WhatsApp BOT dengan menggunakan library Septi Aji (github repo yang saya fork), [Pepesan](https://github.com/mqad21/pepesan) dan [Baileys](https://github.com/WhiskeySockets/Baileys)

Dengan menggunakan library Pepesan, pembuatan BOT WhatsApp jauh lebih mudah dan ringkas. Kesulitan utama dalam pembuatan BOT WhatsApp adalah meminta BOT untuk mengingat dia sedang dalam menu apa (pengaturan state), nah dengan menggunakan library Pepesan ini, kesulitan itu sudah bisa teratasi. 


## Cara Install

1. buat file .env dengan cara berikut
```
cp .env.example .env
```
2. install dependency
```
npm install && npm install -g pm2
```
3. jalankan bot
```
npm run dev && pm2 save && pm2 startup
```
