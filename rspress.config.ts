import * as path from 'node:path';
import { defineConfig } from 'rspress/config';

export default defineConfig({
    root: path.join(__dirname, 'docs'),
    title: 'Lucky Bot',
    icon: '/icon.webp',
    logo: {
        light: '/light-logo.webp',
        dark: '/dark-logo.webp',
    },
    themeConfig: {
        socialLinks: [
            {
                icon: 'github',
                mode: 'link',
                content: 'https://github.com/signal-singularity',
            },
        ],
    },
    lang: 'zh',
    locales: [
        {
            lang: 'en',
            label: 'English',
            title: 'Lucky Bot',
            description: 'Lucky Bot Documentation',
        },
        {
            lang: 'zh',
            label: '简体中文',
            title: 'Lucky Bot',
            description: 'Lucky Bot 文档',
        },
    ],
    markdown: {
        highlightLanguages: [
            ['js', 'javascript'],
            ['ts', 'typescript'],
            ['py', 'python'],
            ['bash', 'bash'],
            ['json', 'json'],
            ['md', 'markdown'],
            ['mdx', 'tsx'],
        ]
    }
});
