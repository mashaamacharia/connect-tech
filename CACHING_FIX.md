 # Caching Issue Fix - Blog Posts Not Updating

## Problem
Blog posts from WordPress were being cached, causing:
- Only one post showing even after adding more
- Changes not reflecting after editing posts
- Deleted posts still appearing
- Static/stale data being displayed

## Solution Applied

### 1. Disabled Next.js Server-Side Caching
**File: `app/media/page.tsx`**
- Added `export const dynamic = 'force-dynamic'` to force dynamic rendering
- Added `export const revalidate = 0` to disable caching
- This ensures the server always fetches fresh data

### 2. Updated Apollo Client Cache Settings
**File: `lib/apollo-client.ts`**
- Changed `fetchPolicy` from `"network-only"` to `"no-cache"` 
- Added cache reset on client reuse
- Added `read()` function that returns `undefined` to force refetch
- Added `clearApolloCache()` utility function

### 3. Enhanced WordPress API Functions
**File: `lib/wordpress/api.ts`**
- All fetch functions now clear cache before querying
- Changed all `fetchPolicy` to `"no-cache"`
- Added `errorPolicy: "all"` for better error handling

### 4. Updated Client Component
**File: `components/mediaPage.tsx`**
- Client component now always fetches fresh data on mount
- Added manual refresh button with loading indicator
- Added console logs for debugging
- Improved error handling

## How to Test

### 1. Restart Your Development Server
```bash
# Stop your current server (Ctrl+C)
# Then restart:
npm run dev
# or
pnpm dev
```

### 2. Clear Browser Cache
- **Chrome/Edge**: Press `Ctrl+Shift+Delete` → Clear cached images and files
- **Or**: Open DevTools (F12) → Right-click refresh button → "Empty Cache and Hard Reload"

### 3. Test the Fix

#### Test 1: Add a New Post
1. Add a new post in WordPress
2. Visit your Next.js app at `http://localhost:3000/media`
3. Click the "Refresh" button in the header
4. The new post should appear immediately

#### Test 2: Edit a Post
1. Edit an existing post in WordPress
2. Click "Refresh" button in Next.js app
3. Changes should appear immediately

#### Test 3: Delete a Post
1. Delete a post in WordPress
2. Click "Refresh" button in Next.js app
3. Deleted post should disappear

#### Test 4: Check Console Logs
1. Open DevTools (F12) → Console tab
2. You should see: `"Fetched posts from WordPress: X"` (where X is the number of posts)
3. This confirms fresh data is being fetched

## Debugging

### Check if Data is Being Fetched
1. Open DevTools (F12) → Network tab
2. Filter by "graphql" or "fetch"
3. Look for requests to your WordPress GraphQL endpoint
4. Check the response - it should contain your latest posts

### Check Apollo Client Cache
1. Open DevTools Console
2. Type: `window.__APOLLO_CLIENT__` (if available)
3. Or check Network tab for GraphQL requests

### Verify WordPress GraphQL Endpoint
1. Visit: `http://localhost/PHPproject/wp_headless/graphql`
2. You should see GraphQL interface or JSON response
3. Test a query to verify posts are being returned

## Common Issues

### Issue: Still Seeing Cached Data
**Solution:**
1. Hard refresh browser: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
2. Clear browser cache completely
3. Restart Next.js dev server
4. Check if WordPress GraphQL is returning updated data

### Issue: Refresh Button Not Working
**Solution:**
1. Check browser console for errors
2. Verify WordPress GraphQL endpoint is accessible
3. Check network tab for failed requests

### Issue: Posts Still Not Updating
**Solution:**
1. Verify WordPress posts are published (not draft)
2. Check WordPress permalinks are saved (Settings → Permalinks)
3. Verify WPGraphQL plugin is active
4. Test GraphQL endpoint directly in browser

## Performance Note

**Important:** Disabling caching means:
- ✅ Always fresh data
- ✅ Real-time updates
- ⚠️ Slightly slower (every request fetches from WordPress)
- ⚠️ More requests to WordPress server

For production, you might want to:
- Add a cache duration (e.g., 5 minutes)
- Use ISR (Incremental Static Regeneration) with revalidation
- Add a webhook from WordPress to trigger rebuilds

## Next Steps

1. **Test the fixes** using the steps above
2. **Monitor performance** - if too slow, consider adding caching with revalidation
3. **Add webhook integration** (optional) - WordPress can notify Next.js when posts change
4. **Consider ISR** for production - balance between freshness and performance

## Files Modified

- ✅ `app/media/page.tsx` - Disabled Next.js caching
- ✅ `lib/apollo-client.ts` - Updated Apollo cache settings
- ✅ `lib/wordpress/api.ts` - Added cache clearing
- ✅ `components/mediaPage.tsx` - Added refresh functionality

## Need Help?

If issues persist:
1. Check browser console for errors
2. Check Network tab for failed requests
3. Verify WordPress GraphQL endpoint is working
4. Test GraphQL queries directly

