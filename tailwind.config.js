const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		join(
			__dirname,
			'{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
		),
	],
	darkMode: ["class", 'class'],
	theme: {
		transparent: 'transparent',
		current: 'currentColor',
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			screens: {
				xs: '480px',
				xxs: '380px'
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				tremor: {
					brand: {
						faint: '#eff6ff',
						muted: '#bfdbfe',
						subtle: '#60a5fa',
						DEFAULT: '#3b82f6',
						emphasis: '#1d4ed8',
						inverted: '#ffffff'
					},
					background: {
						muted: '#f9fafb',
						subtle: '#f3f4f6',
						DEFAULT: '#ffffff',
						emphasis: '#374151'
					},
					border: {
						DEFAULT: '#e5e7eb'
					},
					ring: {
						DEFAULT: '#e5e7eb'
					},
					content: {
						subtle: '#9ca3af',
						DEFAULT: '#6b7280',
						emphasis: '#374151',
						strong: '#111827',
						inverted: '#ffffff'
					}
				},
				'dark-tremor': {
					brand: {
						faint: '#0B1229',
						muted: '#172554',
						subtle: '#1e40af',
						DEFAULT: '#3b82f6',
						emphasis: '#60a5fa',
						inverted: '#030712'
					},
					background: {
						muted: '#131A2B',
						subtle: '#1f2937',
						DEFAULT: '#111827',
						emphasis: '#d1d5db'
					},
					border: {
						DEFAULT: '#1f2937'
					},
					ring: {
						DEFAULT: '#1f2937'
					},
					content: {
						subtle: '#4b5563',
						DEFAULT: '#6b7280',
						emphasis: '#e5e7eb',
						strong: '#f9fafb',
						inverted: '#000000'
					}
				},
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
				'tremor-small': '0.375rem',
				'tremor-default': '0.5rem',
				'tremor-full': '9999px'
			},
			boxShadow: {
				'tremor-input': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
				'tremor-card': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
				'tremor-dropdown': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
				'dark-tremor-input': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
				'dark-tremor-card': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
				'dark-tremor-dropdown': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)'
			},
			fontSize: {
				'tremor-label': [
					'0.75rem',
					{
						lineHeight: '1rem'
					}
				],
				'tremor-default': [
					'0.875rem',
					{
						lineHeight: '1.25rem'
					}
				],
				'tremor-title': [
					'1.125rem',
					{
						lineHeight: '1.75rem'
					}
				],
				'tremor-metric': [
					'1.875rem',
					{
						lineHeight: '2.25rem'
					}
				]
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				wiggle: {
					'0%, 100%': {
						transform: 'translateX(0%)',
						transformOrigin: '50% 50%'
					},
					'15%': {
						transform: 'translateX(-6px) rotate(-6deg)'
					},
					'30%': {
						transform: 'translateX(9px) rotate(6deg)'
					},
					'45%': {
						transform: 'translateX(-9px) rotate(-3.6deg)'
					},
					'60%': {
						transform: 'translateX(3px) rotate(2.4deg)'
					},
					'75%': {
						transform: 'translateX(-2px) rotate(-1.2deg)'
					}
				},
				'fade-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'75%': {
						opacity: '0.6'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'fade-down': {
					'0%': {
						opacity: '0',
						transform: 'translateY(-10px)'
					},
					'75%': {
						opacity: '0.6'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'caret-blink': {
					'0%,70%,100%': {
						opacity: '1'
					},
					'20%,50%': {
						opacity: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				wiggle: 'wiggle 0.8s both',
				'fade-up': 'fade-up 0.5s ease-out',
				'fade-down': 'fade-down 0.5s ease-out',
				'caret-blink': 'caret-blink 1.25s ease-out infinite'
			}
		}
	},
	/* tremor */
	safelist: [
		{
			pattern:
				/^(bg-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
			variants: ["hover", "ui-selected"],
		},
		{
			pattern:
				/^(text-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
			variants: ["hover", "ui-selected"],
		},
		{
			pattern:
				/^(border-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
			variants: ["hover", "ui-selected"],
		},
		{
			pattern:
				/^(ring-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
		},
		{
			pattern:
				/^(stroke-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
		},
		{
			pattern:
				/^(fill-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
		},
	],
	/* */
	plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};
