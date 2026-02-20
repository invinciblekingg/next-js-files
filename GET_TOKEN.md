# Get Your GitHub Personal Access Token (2 minutes)

## Step 1: Go Here
```
https://github.com/settings/tokens
```

## Step 2: Click "Generate new token (classic)"

## Step 3: Fill in:
- **Token name:** YTFlow-Deploy
- **Expiration:** 90 days (or whatever you want)

## Step 4: Select Scope:
Check ONLY the box:
- ✅ `repo` (full control of private repositories)

## Step 5: Generate & Copy
- Click "Generate token"
- **COPY THE TOKEN** (you'll only see it once!)
- It looks like: `ghp_xxx...xxx`

## That's It!

Now go to PowerShell and run:
```
$token = Read-Host "Paste your GitHub token"
$username = Read-Host "Enter your GitHub username"
Write-Host "Ready to deploy!"
```

Then I'll create everything for you!
