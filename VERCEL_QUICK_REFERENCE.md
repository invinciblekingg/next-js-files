# 🎯 Vercel Quick Reference Guide

Fast lookup for common Vercel tasks and commands.

---

## ⚡ Quick Deploy (30 seconds)

```bash
# Option 1: Via CLI
npm install -g vercel
vercel

# Option 2: Via GitHub
git push origin main
# Automatically deploys via GitHub integration
```

---

## 🔧 Common Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server locally
npm start

# Deploy with Vercel CLI
vercel

# See deployment logs
vercel logs

# List all deployments
vercel list

# Pull environment variables from Vercel
vercel env pull

# Deploy without git (git-less)
vercel --prod
```

---

## 🌐 Access Your App

After deployment:
- **Deployment URL:** `https://your-project.vercel.app`
- **Vercel Dashboard:** https://vercel.com/dashboard
- **Project Settings:** Dashboard → Project Name → Settings
- **Deployments:** Dashboard → Project Name → Deployments

---

## 📝 Environment Variables

### Add via Vercel Dashboard
1. Dashboard → Your Project → Settings
2. Environment Variables
3. Add Name & Value
4. Select Environments (Production/Preview/Development)
5. Redeploy

```bash
# Or via CLI
vercel env add OPENAI_API_KEY
# Enter value when prompted
```

---

## 🚨 Common Issues & Fixes

| Issue | Solution |
|-------|----------|
| Build fails | Check `vercel logs` - look for errors in build output |
| API returns 500 | Check function logs: Dashboard → Functions |
| Env var not working | Ensure it's in Vercel Settings, not `.env.local` |
| Git won't push | Verify: `git status` and `git remote -v` |
| Deployment doesn't update | Did you commit & push? Check git status |
| Memory exceeded | Install packages are too large - check package.json |
| Function timeout | Increase timeout in vercel.json if needed |

---

## 📊 Monitoring

```bash
# Check deployment status
vercel status

# View recent deployments
vercel list

# Open in browser
vercel open

# Check project settings
vercel inspect
```

---

## 🔄 Redeployment

```bash
# Trigger redeploy from CLI
vercel --prod

# Via Dashboard
# Dashboard → Deployments → [Latest] → Redeploy

# Auto-deploys on git push to main branch
```

---

## 📦 Install Optional Packages

```bash
# For real video downloads
npm install ytdl-core
git add package*.json
git commit -m "Add ytdl-core"
git push origin main

# For AI transcription
npm install openai
git add package*.json
git commit -m "Add openai"
git push origin main
```

---

## 🔑 API Endpoints to Test

```bash
# Test download endpoint
curl -X POST https://your-app.vercel.app/api/download \
  -H "Content-Type: application/json" \
  -d '{"url":"https://youtube.com/watch?v=dQw4w9WgXcQ","format":"mp4"}'

# Test transcribe endpoint
curl -X POST https://your-app.vercel.app/api/transcribe \
  -H "Content-Type: application/json" \
  -d '{"url":"https://youtube.com/watch?v=dQw4w9WgXcQ"}'
```

---

## 🎯 Useful Links

| Resource | Link |
|----------|------|
| Vercel Dashboard | https://vercel.com/dashboard |
| Select Project | https://vercel.com/dashboard/[project-name] |
| Environment Vars | https://vercel.com/dashboard/[project-name]/settings/environment-variables |
| Function Logs | https://vercel.com/dashboard/[project-name]/functions |
| Deployments | https://vercel.com/dashboard/[project-name]/deployments |
| CLI Docs | https://vercel.com/docs/cli |
| Next.js Docs | https://nextjs.org/docs |

---

## 🆘 Get Help

```bash
# Vercel CLI help
vercel help

# Specific command help
vercel [command] --help

# View logs
vercel logs

# Open dashboard
vercel open

# Contact support
# https://vercel.com/support
```

---

## ✅ Pre-Deployment Checklist

- [ ] Code works locally (`npm run dev`)
- [ ] No build errors (`npm run build`)
- [ ] Git initialized (`git init`)
- [ ] Remote added (`git remote -v`)
- [ ] Changes committed (`git status` is clean)
- [ ] Pushed to GitHub (`git push origin main`)
- [ ] Vercel project created
- [ ] GitHub integration connected
- [ ] Environment variables added (if needed)

---

## 📈 Performance Tips

```bash
# Check bundle size
npm install -g webpack-bundle-analyzer

# Profile build
npm run build -- --analyze

# Monitor function execution
# Dashboard → Functions → View execution details

# Check memory usage
vercel logs --follow
```

---

## 🔄 Rollback to Previous Deployment

```bash
# View deployments
vercel list

# Promote previous deployment to production
vercel promote [deployment-url]

# Example:
vercel promote ytflow-abc123.vercel.app
```

---

## 💰 Cost Optimization

1. Use Free Tier during development/testing
2. Monitor Function execution time in Logs
3. Optimize images and assets
4. Use ISR (Incremental Static Regeneration)
5. Minimize dependencies in package.json

---

## 🎯 Next Steps

1. **Deploy:** Follow DEPLOYMENT.md
2. **Test:** Visit your Vercel URL
3. **Monitor:** Check Dashboard → Functions
4. **Optimize:** Enable production features
5. **Scale:** Add custom domain when ready

---

## 📚 More Help

- 📖 Full Guide: See **DEPLOYMENT.md**
- 🎨 Setup Details: See **SETUP_COMPLETE.md**
- 📝 Full Docs: See **README.md**
- 🚀 Getting Started: Run `npm run dev` locally

---

**Running into issues? Check the Troubleshooting section above or visit https://vercel.com/support**

**Happy deploying! 🚀**
