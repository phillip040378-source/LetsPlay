/**
 * Visual Smoke Test Script
 * Run: node scripts/visual-check.mjs
 * 
 * Checks that the production build contains expected CSS classes and content,
 * ensuring Tailwind generated the utilities and React rendered the components.
 */

import { readFileSync, readdirSync } from 'fs';
import { join, resolve } from 'path';

const DIST = resolve('dist');
const PASS = '✅';
const FAIL = '❌';
let failures = 0;

function check(label, condition) {
    if (condition) {
        console.log(`  ${PASS} ${label}`);
    } else {
        console.log(`  ${FAIL} ${label}`);
        failures++;
    }
}

function findFile(dir, pattern) {
    const files = readdirSync(dir);
    return files.find(f => f.match(pattern));
}

console.log('\n🔍 Visual Smoke Test\n');

// 1. Check dist exists
const assets = join(DIST, 'assets');
const cssFile = findFile(assets, /\.css$/);
const jsFile = findFile(assets, /\.js$/);

console.log('📦 Build Output:');
check('dist/assets/ contains CSS file', !!cssFile);
check('dist/assets/ contains JS file', !!jsFile);

if (!cssFile || !jsFile) {
    console.log('\n⛔ Build output missing. Run `npm run build` first.\n');
    process.exit(1);
}

// 2. Check CSS contains critical Tailwind utilities
const css = readFileSync(join(assets, cssFile), 'utf8');
console.log(`\n🎨 CSS Checks (${cssFile}, ${(css.length / 1024).toFixed(1)}KB):`);

const criticalCssPatterns = [
    ['Flex layout', 'flex'],
    ['Grid layout', 'grid'],
    ['Rounded corners', 'rounded'],
    ['Background gradient', 'gradient'],
    ['Shadow utilities', 'shadow'],
    ['Backdrop blur (glassmorphism)', 'backdrop'],
    ['Animation (blob)', 'blob'],
    ['Transition utilities', 'transition'],
    ['Text colors (slate)', 'slate'],
    ['Blue accent color', 'blue'],
    ['Pink accent color', 'pink'],
];

criticalCssPatterns.forEach(([label, pattern]) => {
    check(label, css.includes(pattern));
});

check('CSS file > 10KB (Tailwind generated)', css.length > 10000);

// 3. Check JS contains critical component content
const js = readFileSync(join(assets, jsFile), 'utf8');
console.log(`\n⚛️  Component Checks (${jsFile}, ${(js.length / 1024).toFixed(1)}KB):`);

const criticalJsContent = [
    ['StickyHeader: "Let\'s Play" brand', "Let's Play"],
    ['StickyHeader: "Book Now" button', 'Book Now'],
    ['VibrantHero: Headline text', 'Known & Loved'],
    ['VibrantHero: Sparkles badge', "Child's Happy Place"],
    ['BentoGrid: Activities card', 'Exciting Activities'],
    ['BentoGrid: Safety card', 'Safety First'],
    ['BentoGrid: Holiday CTA', 'Holiday Clubs'],
    ['StatsSection: Years Experience', 'Years Experience'],
    ['StatsSection: Happy Children', 'Happy Children'],
    ['Footer: Phone number', '07973 819280'],
    ['Footer: Email', 'letsplaynw@gmail.com'],
    ['Footer: Address', 'Canterbury Road'],
    ['Navigation: Blog link', 'News & Activities'],
    ['Navigation: Staff link', 'Meet the Team'],
    ['Booking URL', 'magicbooking.co.uk'],
];

criticalJsContent.forEach(([label, text]) => {
    check(label, js.includes(text));
});

// 4. Check index.html
console.log('\n📄 HTML Checks:');
const html = readFileSync(join(DIST, 'index.html'), 'utf8');
check('Title tag present', html.includes("Let's Play"));
check('Google Fonts loaded', html.includes('fonts.googleapis.com'));
check('Viewport meta tag', html.includes('viewport'));
check('Root div for React', html.includes('id="root"'));

// Summary
console.log('\n' + '─'.repeat(50));
if (failures === 0) {
    console.log(`\n🎉 All checks passed! The site should render correctly.\n`);
    process.exit(0);
} else {
    console.log(`\n⚠️  ${failures} check(s) failed. Review the issues above.\n`);
    process.exit(1);
}
