# 🚀 YTFlow Vercel Deployment Guide

Complete step-by-step guide to deploy YTFlow to Vercel.

---

## Prerequisites

- GitHub account
- Vercel account (free at https://vercel.com)
- Node.js 18+ installed locally
- Git installed

---

## Step 1: Prepare Your Code for Git

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial YTFlow commit"

# Rename branch to main (if needed)
git branch -M main
```

---

## Step 2: Create GitHub Repository

1. Go to https://github.com/new
2. Create a new repository named `ytflow`
3. Do NOT initialize with README, .gitignore, or license
4. Copy the repository URL (HTTPS)

---

## Step 3: Push to GitHub

```bash
# Set remote origin
git remote add origin https://github.com/YOUR_USERNAME/ytflow.git

# Push to main branch
git push -u origin main
```

---

## Step 4: Connect to Vercel

### Method A: Using Vercel Dashboard (Easiest)

1. Go to https://vercel.com/dashboard
2. Click "New Project" button
3. Click "Import Git Repository"
4. Paste your GitHub repository URL
5. Click "Import"

### Method B: Using Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy from project directory
vercel
```

---

## Step 5: Configure Environment Variables in Vercel

### For Transcription Feature (Optional but Recommended)

1. In Vercel Dashboard, go to your project
2. Click "Settings" → "Environment Variables"
3. Click "Add New"
4. Add the following:
   - **Name:** `OPENAI_API_KEY`
   - **Value:** Your OpenAI API key (from https://platform.openai.com/api-keys)
   - **Environments:** Select "Production", "Preview", and "Development"
5. Click "Save"
6. Vercel will redeploy automatically

---

## Step 6: Custom Domain (Optional)

1. In Vercel project settings, click "Domains"
2. Click "Add Domain"
3. Enter your domain (e.g., `ytflow.com`)
4. Follow DNS configuration instructions
5. Wait for DNS propagation (can take 24-48 hours)

---

## Step 7: Enable Production Features

### To Enable Real Video Downloads

1. Install ytdl-core locally:
   ```bash
   npm install ytdl-core
   ```

2. Uncomment the ytdl-core implementation in `app/api/download/route.js`:
   ```javascript
   // Replace demo response with the provided implementation
   // const ytdl = require("ytdl-core");
   // ... (see commented code in route.js)
   ```

3. Commit and push:
   ```bash
   git add .
   git commit -m "Enable ytdl-core for video downloads"
   git push origin main
   ```

4. Vercel will automatically rebuild and deploy

### To Enable Real Transcription

1. Install OpenAI:
   ```bash
   npm install openai
   ```

2. Get OpenAI API key (or use existing):
   - Go to https://platform.openai.com/api-keys
   - Create new secret key
   - Copy the key

3. Add to Vercel environment variables (see Step 5)

4. Uncomment the OpenAI implementation in `app/api/transcribe/route.js`

5. Commit and push:
   ```bash
   git add .
   git commit -m "Enable OpenAI Whisper for transcription"
   git push origin main
   ```

---

## Step 8: Verify Deployment

1. Visit your Vercel URL (provided in dashboard)
2. Test the UI loads correctly
3. Try API endpoints:

   ```bash
   # Test download endpoint
   curl -X POST https://your-app.vercel.app/api/download \
     -H "Content-Type: application/json" \
     -d '{
       "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
       "format": "mp4",
       "quality": "1080p"
     }'

   # Test transcribe endpoint
   curl -X POST https://your-app.vercel.app/api/transcribe \
     -H "Content-Type: application/json" \
     -d '{
       "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
       "language": "auto"
     }'
   ```

---

## Monitoring & Logs

### View Logs

1. Vercel Dashboard → Your Project
2. Click "Deployments"
3. Click on the latest deployment
4. Click "Logs" to see build and runtime logs

### Check Function Performance

1. Dashboard → "Functions"
2. See execution time and memory usage
3. Monitor API endpoints

---

## Troubleshooting

### Build Fails
- Check build logs: Dashboard → Deployments → Logs
- Ensure all dependencies are in `package.json`
- Verify `next.config.js` is valid

### Environment Variables Not Working
- Ensure variables are added to Vercel (not just `.env.local`)
- Redeploy after adding variables: Dashboard → Deployments → Redeploy
- Check that variable names match exactly (case-sensitive)

### API Endpoint Returns 500
- Check function logs: Dashboard → Functions
- For download: ensure `ytdl-core` is installed
- For transcribe: ensure `OPENAI_API_KEY` is set and valid
- Test locally first: `npm run dev`

### Deployment Takes Too Long
- Normal builds take 1-3 minutes
- If longer, check for large dependencies
- Consider using `--legacy-peer-deps` flag if needed

---

## Performance Tips

1. **Caching:**
   - Set Cache-Control headers in `next.config.js`
   - Implement ISR for frequently accessed content

2. **Function Duration:**
   - Keep API responses under 10 seconds for best UX
   - For long operations, use webhooks or background jobs

3. **Memory Optimization:**
   - Monitor function memory usage
   - Consider streaming responses for large files

4. **Cost Optimization:**
   - Use Vercel's free tier initially
   - Monitor usage as you scale
   - Consider Pro plan if you need more resources

---

## Next Steps

After deployment:

1. **Add Custom Domain**
   - Makes your app look professional
   - Better for SEO

2. **Set Up Analytics**
   - Enable Vercel Analytics
   - Monitor user behavior and performance

3. **Enable Preview Deployments**
   - Automatic for pull requests
   - Test changes before merging

4. **Configure CI/CD**
   - Automatic deployments on main branch
   - Preview deployments for PRs

---

## Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Environment Variables in Vercel](https://vercel.com/docs/projects/environment-variables)
- [Vercel Functions](https://vercel.com/docs/functions/serverless-functions)
- [OpenAI API Documentation](https://platform.openai.com/docs)

---

## Support

For issues:
1. Check Vercel Dashboard → Deployments → Logs
2. Run `vercel logs` command locally
3. See README.md Troubleshooting section
4. Contact Vercel support at https://vercel.com/support

---

**Your YTFlow app is now live on Vercel! 🎉**

Visit your deployment URL and start downloading and transcribing!
