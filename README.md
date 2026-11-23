# مقاضي البيت: خطوات التشغيل

## 1) إعداد Firebase
1. ادخل https://console.firebase.google.com وسوّ مشروع جديد.
2. **Build > Authentication > Get started**، فعّل **Email/Password**.
3. **Build > Firestore Database > Create database** (اختر Production mode).
4. من تبويب **Rules** في Firestore: امسح الموجود والصق محتوى ملف `firestore.rules` ثم **Publish**.
5. **Project settings (الترس) > General > Your apps > Web (</>)** وسجل تطبيق ويب، ثم انسخ `firebaseConfig`.
6. الصق القيم داخل ملف `firebase-config.js`.

## 2) حساب المشرف (مهم، سوّه قبل أي أحد)
- **Authentication > Users > Add user**
- Email: `admin@maqady.app`
- Password: كلمة سر قوية تختارها أنت
- من الموقع اضغط «دخول المشرف» وادخل بكلمة السر.

## 3) رفعه على GitHub Pages
1. سوّ Repository جديد على github.com.
2. ارفع الملفات: `index.html` و `firebase-config.js` (وباقي الملفات اختياري).
3. **Settings > Pages > Source: Deploy from a branch > main / root > Save**
4. بعد دقيقة يطلع الرابط: `https://اسمك.github.io/اسم-المستودع/`

## 4) خطوة لازم لا تنساها
في Firebase: **Authentication > Settings > Authorized domains > Add domain**
وأضف `اسمك.github.io`. بدونها الدخول ما يشتغل.

## إعادة تعيين كلمة سر بيت نسيها
1. **Authentication > Users**، دوّر على مستخدم البيت (إيميله شكله `xxxxxxxx@maqady.app`، وقائمة المشرف في الموقع تعطيك اسم البيت وتاريخ تسجيله).
2. احذف المستخدم.
3. صاحب البيت يضغط «بيت جديد» بنفس الاسم وكلمة سر جديدة، وترجع له أغراضه كلها.

## الخصوصية
- كل بيت بياناته مفصولة بقواعد الأمان في السيرفر (`firestore.rules`).
- المشرف يشوف اسم البيت وتاريخ التسجيل فقط، وما يشوف الأغراض.
- ما فيه إيميل حقيقي ولا جوال، فنسيان كلمة السر يعالج بالمشرف فقط.
