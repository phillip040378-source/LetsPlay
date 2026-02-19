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

// 1. Build output
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

// 2. CSS checks
const css = readFileSync(join(assets, cssFile), 'utf8');
console.log(`\n🎨 CSS Checks (${(css.length / 1024).toFixed(1)}KB):`);

const cssPats = [
    ['Flex layout', 'flex'], ['Grid layout', 'grid'],
    ['Rounded corners', 'rounded'], ['Gradients', 'gradient'],
    ['Shadows', 'shadow'], ['Backdrop blur', 'backdrop'],
    ['Blob animation', 'blob'], ['Transitions', 'transition'],
    ['Navy color (#001f3f)', '001f3f'], ['Red color (#ff4136)', 'ff4136'],
];
cssPats.forEach(([l, p]) => check(l, css.includes(p)));
check('CSS > 10KB', css.length > 10000);

// 3. Content checks
const js = readFileSync(join(assets, jsFile), 'utf8');
console.log(`\n⚛️  Content (${(js.length / 1024).toFixed(1)}KB):`);

const content = [
    ["Brand: Let's Play", "Let's Play"],
    ['CTA: Book Now', 'Book Now'],
    ['CTA: Book a Session', 'Book a Session'],
    ['Hero headline', 'Love'],
    ['Hours: Breakfast', '7:30'],
    ['Hours: Afterschool', '3:00'],
    ['Feature: Crafts', 'Crafts'],
    ['Feature: Event Days', 'Event Days'],
    ['Feature: Snacks', 'Snacks'],
    ['Feature: SEND', 'SEND'],
    ['Staff: Trish', 'Trish'],
    ['Staff: Danni', 'Danni'],
    ['Staff: Claudia', 'Claudia'],
    ['Family business', 'family'],
    ['Partnership: Davyhulme', 'Davyhulme Primary'],
    ['Location: Canterbury Road', 'Canterbury Road'],
    ['Location: Urmston', 'Urmston'],
    ['Contact: Phone', '07973 819280'],
    ['Contact: Email', 'letsplaynw@gmail.com'],
    ['Booking URL', 'magicbooking.co.uk'],
    ['Nav: News & Activities', 'News'],
    ['Nav: Meet the Team', 'Meet the Team'],
    ['Ofsted', 'Ofsted'],
    ['Term dates', 'term dates'],
];
content.forEach(([l, t]) => check(l, js.toLowerCase().includes(t.toLowerCase())));

// 4. HTML
console.log('\n📄 HTML:');
const html = readFileSync(join(DIST, 'index.html'), 'utf8');
check('Title', html.includes("Let's Play"));
check('Google Fonts', html.includes('fonts.googleapis.com'));
check('Root div', html.includes('id="root"'));

// Summary
console.log('\n' + '─'.repeat(50));
if (failures === 0) {
    console.log(`\n🎉 All checks passed!\n`);
} else {
    console.log(`\n⚠️  ${failures} check(s) failed.\n`);
}
process.exit(failures > 0 ? 1 : 0);
