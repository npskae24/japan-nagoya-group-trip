# ทริปญี่ปุ่น นาโกย่า · ทาคายามะ · ชิราคาวะโกะ · คานาซาวะ (กลุ่ม 18 คน)

เว็บแอปดูแผนบนมือถือ มี 2 แบบ: **5 วัน 4 คืน** และ **6 วัน 5 คืน** (กดสลับด้านบน)
ใช้ออฟไลน์ได้ และ "เพิ่มลงหน้าจอโฮม" ได้

- ไฟล์เดียว `index.html` (CSS/JS ในไฟล์) + `sw.js` (ออฟไลน์) + `manifest.json`
- ราคา/เวลาเป็น **ประมาณการ** ข้อมูลที่ติด "เช็กก่อนไป" ยังไม่ยืนยัน
- ไม่ได้จอง จ่าย หรือติดต่อใคร

## เส้นทาง
- 5 วัน: ทาคายามะ 2 คืน → คานาซาวะ 1 คืน → โรงแรมสนามบินนาโกย่า 1 คืน
- 6 วัน: ทาคายามะ 2 คืน → คานาซาวะ 2 คืน → โรงแรมสนามบินนาโกย่า 1 คืน

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

ตั้งค่า Pages เลือกอย่างใดอย่างหนึ่ง:
1. **Settings → Pages → Source: Deploy from a branch → Branch: `main` / `(root)` → Save**
2. หรือ **Source: GitHub Actions** แล้วใช้ไฟล์ `.github/workflows/pages.yml` ที่มีให้แล้ว

ลิงก์จะเป็น `https://<ชื่อบัญชี>.github.io/japan-nagoya-group-trip/` ส่งใน LINE กลุ่มได้เลย

## แก้แผน
แก้ข้อมูลใน `index.html` (ตัวแปร `D1`… `V`, `HOTEL_PP`, `FX`) แล้ว **เปลี่ยนชื่อ cache ใน `sw.js`** (เช่น `nagoya-trip-v1.1`) และเลขเวอร์ชันในหน้า เพื่อให้มือถือโหลดของใหม่

## ที่มาหลัก
thaiembassy.jp · osaka.thaiembassy.org · nouhibus.co.jp · hokutetsu.co.jp · touristpass.jp · jr-group.jp · meitetsu.co.jp · kuronekoyamato.co.jp · jinya.gifu.jp · shiro-niwa.pref.ishikawa.lg.jp · shirakawa-go.gr.jp · vill.shirakawa.lg.jp · centrair.jp · houraiken.com · yabaton.com · maruya-honten.com · kanazawa21.jp · flight.info · sky-budget.com · open.er-api.com (FX)
