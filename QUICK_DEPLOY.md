# ⚡ Copy-Paste Commands for Deployment

## Quick Setup (All Commands in One Shot)

After installing Git, open PowerShell and run these exactly as shown:

```powershell
# Step 1: Navigate to project
cd c:\Users\DELL\Downloads\files

# Step 2: Initialize and configure git
git init
git config user.name "Your Name"
git config user.email "your.email@gmail.com"

# Step 3: Create first commit
git add .
git commit -m "Initial YTFlow commit - ready for Vercel"

# Step 4: Rename branch (if needed)
git branch -M main

# Step 5: Add remote - REPLACE YOUR_USERNAME with your GitHub username
git remote add origin https://github.com/YOUR_USERNAME/ytflow.git

# Step 6: Push to GitHub
git push -u origin main
```

## What You Need Before Running:

1. **Install Git:** https://git-scm.com/download/win (then restart terminal)
2. **Create GitHub account:** https://github.com/signup
3. **Create empty repository:** https://github.com/new
   - Name: `ytflow`
   - Do NOT add README, .gitignore, or license
   - Copy the URL shown

## After Git Push Succeeds:

1. Go to https://vercel.com/dashboard
2. Sign in with GitHub
3. Click "New Project"
4. Click "Import Git Repository"
5. Paste: `https://github.com/YOUR_USERNAME/ytflow.git`
6. Click "Deploy"
7. Wait 1-2 minutes
8. **Your app is LIVE!** 🎉 Get the URL from Vercel dashboard

## If Git Push Fails:

**Error:** `sign_and_send_pubkey: signing failed for key`
- Solution: Use Personal Access Token instead:
  1. Go to: https://github.com/settings/tokens
  2. Click "Generate new token (classic)"
  3. Give it "repo" scope
  4. Copy token
  5. When git asks for password, paste the token

**Error:** `fatal: could not read Username`
- Solution: Git might store credentials. Try:
  ```bash
  git config --global credential.helper wincred
  git push -u origin main
  ```

## Current Directory Contents:

```
c:\Users\DELL\Downloads\files\
├── app/
│   ├── api/
│   │   ├── download/route.js
│   │   └── transcribe/route.js
│   ├── layout.js
│   ├── globals.css
│   └── page.jsx
├── package.json          ← Dependencies
├── next.config.js        ← Next.js config
├── vercel.json          ← Vercel config
├── .env.example         ← Env template
├── .gitignore           ← Git ignore
├── README.md            ← Documentation
└── Other files...
```

## Verify Git is Installed:

```powershell
git --version
# Should show: git version 2.x.x or similar
```

## Check Your Changes Before Push:

```powershell
git status      # Show what will be committed
git log         # Show commit history
```

---

**READY? Follow the "Quick Setup" section above! 🚀**
