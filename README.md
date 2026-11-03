# แผนทริปญี่ปุ่น

2 ทริปให้เลือก (นาโกย่า–ทาคายามะ–คานาซาวะ / โตเกียว–ฟูจิ–นิกโก้) · กลุ่ม 18 คน

เวอร์ชัน v2.3 (3 พ.ย. 2026 เปลี่ยนชื่อแอป) · มีปุ่มสลับทริปด้านบน (จำค่าที่เลือกใน localStorage `trip`) · **ทริปโตเกียว** (ข้อมูล `TDAYS`, `TIMG`, `budgetTK()`, `renderTK()`): คาวากุจิโกะ 2 คืน → อุเอโนะ 4 คืน · ตั๋วการบินไทย BKK 23:50→NRT 08:10 ฿33,105/คน (Google Flights 3 พ.ย. 2026) ขากลับรอยืนยัน · รูปโตเกียว `images/tk-*.webp`

**ทริปนาโกย่า** (v2.1 ไม่เปลี่ยนเนื้อหา): ทริป 7 วัน 6 คืน ศ. 9 – พฤ. 15 เม.ย. 2027 บินการบินไทย TG 644 (BKK 00:05→NGO 08:00 ออกจากบ้าน 8 เม.ย. ค่ำ) / TG 645 (NGO 11:00→BKK 15:00) · ตั๋ว ฿30,080/คน (Google Flights 31 ต.ค. 2026) · เมื่อแก้ไฟล์ ให้เปลี่ยน CACHE ใน sw.js ทุกครั้ง

เว็บแอปดูแผนบนมือถือ แผนเดียว **7 วัน 6 คืน** (แผน A รถเหมา / แผน B รถไฟ+บัส+ส่งกระเป๋า)
ใช้ออฟไลน์ได้ และ "เพิ่มลงหน้าจอโฮม" ได้

- ไฟล์เดียว `index.html` (CSS/JS ในไฟล์) + `sw.js` (ออฟไลน์) + `manifest.json`
- รูปสถานที่/ร้านใน `images/` (webp ~800px, แคชออฟไลน์ใน sw.js) · เครดิตและสัญญาอนุญาตอยู่ในหัวข้อ "เครดิตรูปภาพ" ในหน้า (ส่วนใหญ่ Wikimedia Commons; รูปร้าน 4 ร้านจากเว็บไซต์ทางการของร้าน/สมาคมท่องเที่ยว)
- ราคา/เวลาเป็น **ประมาณการ** ข้อมูลที่ติด "เช็กก่อนไป" ยังไม่ยืนยัน
- ไม่ได้จอง จ่าย หรือติดต่อใคร

## เส้นทาง
- นาโกย่า (สถานี) 1 คืน → ทาคายามะ 2 คืน → คานาซาวะ 2 คืน → โรงแรมสนามบินนาโกย่า 1 คืน

## ดูในเครื่อง
```bash
python3 -m http.server 8000
# เปิด http://localhost:8000
```

## ขึ้น GitHub Pages
```bash
cd japan-nagoya-group-trip
git remote add origin https://github.com/<ชื่อบัญชี>/japan-nagoya-group-trip.git
git branch -M main
git push -u origin main
```
(repo นี้ `git init` และ commit แรกไว้แล้ว ถ้าเริ่มใหม่: `git init && git add . && git commit -m "first"`)

ตั้งค่า Pages:
1. **Settings → Pages → Source: Deploy from a branch → Branch: `main` / `(root)` → Save**

ลิงก์จะเป็น `https://<ชื่อบัญชี>.github.io/japan-nagoya-group-trip/` ส่งใน LINE กลุ่มได้เลย

## แก้แผน
แก้ข้อมูลใน `index.html` (ตัวแปร `DAYS`, `NIGHTS`, `HOTEL_PP`, `FLIGHT_THB`, `CHARTER_DAY`, `FX`) แล้ว **เปลี่ยนชื่อ cache ใน `sw.js`** (ตอนนี้ `japan-trip-v2.3`) · เพิ่มรูปใหม่ต้องใส่ใน `IMG` และรายการ ASSETS ใน `sw.js` และเลขเวอร์ชันในหน้า เพื่อให้มือถือโหลดของใหม่

## ที่มาหลัก
thaiembassy.jp · osaka.thaiembassy.org · nouhibus.co.jp · hokutetsu.co.jp · touristpass.jp · jr-group.jp · meitetsu.co.jp · kuronekoyamato.co.jp · jinya.gifu.jp · shiro-niwa.pref.ishikawa.lg.jp · shirakawa-go.gr.jp · vill.shirakawa.lg.jp · centrair.jp · houraiken.com · yabaton.com · maruya-honten.com · kanazawa21.jp · tour.ne.jp (ราคาที่พักตามวัน) · Google Flights · ekitan.com · kankou-gifu.jp · esca-sc.com · open.er-api.com (FX) · ทริปโตเกียว: ดูหัวข้อ "ที่มา" ในหน้า
