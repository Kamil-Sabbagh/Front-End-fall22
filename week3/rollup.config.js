import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';

export default {
    input: 'main.ts',
    output: { file: 'bundle.js' },
    plugins: [
        resolve({ browser: true }),
        terser(),
        typescript(),
    ],
};

