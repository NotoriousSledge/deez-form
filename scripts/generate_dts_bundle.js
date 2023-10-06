// @ts-check
// scripts/generate-dts-bundle.js
import { createBundle } from 'dts-buddy';

async function main() {
    await createBundle({
        project: './tsconfig.json',
        output: './types/index.d.ts',
        modules: {
            'deez-form': './src/index.js',
        },
        include: ['./src'],
    });
}

void main();
