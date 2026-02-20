# 📋 COPY & PASTE COMMANDS ONLY

## ZERO THINKING REQUIRED - Just copy and paste each section!

---

## 1️⃣ FIRST: Download & Install Git
```
Go to: https://git-scm.com/download/win
Click Download → Run installer → Click Next → Install
Then RESTART PowerShell
```

---

## 2️⃣ THEN: Run in PowerShell

### Part A - Setup Git:
```powershell
cd "c:\Users\DELL\Downloads\files"
git config --global user.name "Your Name"
git config --global user.email "your@email.com"
git init
git add .
git commit -m "YTFlow ready for Vercel"
git branch -M main
```

### Part B - Get GitHub Token:
```
Go to: https://github.com/settings/tokens
Click: Generate new token (classic)
Give it: repo scope  
Click: Generate
COPY THE TOKEN and save it
```

### Part C - Create GitHub Repo:
```
Go to: https://github.com/new
Name: ytflow
Do NOT add README/license
Click: Create repository
COPY THE URL shown
```

### Part D - Push to GitHub:
```powershell
cd "c:\Users\DELL\Downloads\files"
git remote add origin [PASTE YOUR URL HERE]
git push -u origin main
# When asked for password, PASTE YOUR TOKEN (not your password!)
```

---

## 3️⃣ FINALLY: Deploy to Vercel

```
Go to: https://vercel.com/dashboard
Click: New Project
Click: Your ytflow repo
Click: Deploy
WAIT 1-2 MINUTES
Done! Get your URL from dashboard
```

---

## ✅ YOUR APP IS NOW LIVE! 🎉

Visit: `https://ytflow-[random].vercel.app`

---

## 📝 REMEMBER:
- [YOUR_URL] from GitHub new repo page
- [TOKEN] from github.com/settings/tokens
- [YOUR_NAME] and [YOUR_EMAIL] for git config
