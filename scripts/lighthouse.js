#!/usr/bin/env node

/**
 * Lighthouse CI Script
 * Run this script to test performance, accessibility, SEO, and best practices
 * 
 * Usage:
 *   node scripts/lighthouse.js
 * 
 * Requirements:
 *   npm install -g @lhci/cli
 */

const { execSync } = require('child_process')

const urls = [
  'http://localhost:3000',
  // Add more URLs to test
]

console.log('🚀 Starting Lighthouse CI...\n')

try {
  // Check if lighthouse is installed
  execSync('lhci --version', { stdio: 'ignore' })
} catch (error) {
  console.error('❌ Lighthouse CI is not installed.')
  console.log('Install it with: npm install -g @lhci/cli')
  process.exit(1)
}

console.log('📊 Running Lighthouse tests...\n')

try {
  execSync('lhci autorun', {
    stdio: 'inherit',
    env: {
      ...process.env,
      LHCI_BUILD_CONTEXT__CURRENT_HASH: 'local',
    },
  })
  console.log('\n✅ Lighthouse tests completed successfully!')
} catch (error) {
  console.error('\n❌ Lighthouse tests failed!')
  process.exit(1)
}
