import js from '@eslint/js';
import eslintPluginImport from 'eslint-plugin-import';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['dist'] },  // Ignora la carpeta dist, donde normalmente está el código compilado
  {
    // Extiende las configuraciones recomendadas de ESLint y de TypeScript
    extends: [
      js.configs.recommended,  // Reglas recomendadas para JavaScript
      ...tseslint.configs.recommended,  // Reglas recomendadas para TypeScript
    ],

    // Define los tipos de archivo que serán procesados
    files: ['**/*.{ts,tsx}'],  // Procesa todos los archivos .ts y .tsx

    // Opciones de configuración de lenguaje
    languageOptions: {
      ecmaVersion: 2020,  // Usa ECMAScript 2020
      globals: globals.browser,  // Define que el entorno es un navegador
    },

    // Plugins adicionales para React y React Hooks
    plugins: {
      'react-hooks': reactHooks,  // Configuración del plugin React Hooks
      'react-refresh': reactRefresh,  // Configuración del plugin React Refresh
      'import': eslintPluginImport,  // Configuración del plugin Import
  
    },

    rules: {
      ...reactHooks.configs.recommended.rules,  // Aplica las reglas recomendadas para React Hooks
      '@typescript-eslint/no-unused-expressions': ['error', {
        allowShortCircuit: true, // Permite expresiones cortas como a && b
        allowTernary: true, // Permite expresiones ternarias como a ? b : c
        allowTaggedTemplates: true // Permite plantillas etiquetadas
      }],
      // Reglas específicas de tu proyecto
      'react-refresh/only-export-components': 'off',  // Desactiva la regla que requiere exportar solo componentes
      'no-inline-comments': 'error',
      // **Reglas de estilo según Airbnb**
      
      // 1. Comillas simples
      'quotes': ['error', 'single'],  // Usa comillas simples para cadenas de texto en lugar de dobles
      // 2. Comillas en JSX
      'jsx-quotes': ['error', 'prefer-single'],  // En JSX, usa comillas simples para atributos (por ejemplo: <div className='example'>)
      // 3. Punto y coma
      'semi': ['error', 'always'],  // Exige que todas las declaraciones terminen con un punto y coma

      // **Reglas adicionales**
      // 5. Orden de las importaciones
      'import/order': [
        'error',
        {
          groups: [
            ['builtin', 'external'], // Primero las importaciones de dependencias externas (como react, lodash, etc.)
            'internal', // Luego las importaciones internas (por ejemplo, tus propios componentes o módulos)
          ],
          'newlines-between': 'always',  // Exige una línea en blanco entre los distintos grupos de importación
        },
      ],

      // 6. Uso del operador de punto en lugar de corchetes
      'dot-notation': ['error', { 'allowKeywords': true }],  // Usa notación de punto en lugar de corchetes para acceder a las propiedades de los objetos cuando sea posible

      // 7. Preferencia por las funciones flecha
      'prefer-arrow-callback': 'error',  // Usa funciones flecha en lugar de funciones anónimas tradicionales en callbacks

      // 8. Indentación con 2 espacios
      'indent': ['error', 2],  // Exige que la indentación sea de 2 espacios

      // 9. No se deben dejar variables no utilizadas
      'no-unused-vars': ['error', { 'args': 'none' }],  // No permite variables no utilizadas, excepto los argumentos no usados en funciones

      // 10. No se debe usar eval
      'no-eval': 'error',  // Desactiva el uso de la función eval() por razones de seguridad

      // 11. No se deben dejar console.log() en producción
      'no-console': ['warn', { 'allow': ['warn', 'error'] }],  // Solo permite el uso de 'console.warn' y 'console.error'
      
      // 12. Preferencia por funciones declaradas de forma explícita
      'func-names': ['error', 'always'],  // Exige que todas las funciones tengan nombre (no funciones anónimas)

      // 13. Restricciones sobre los imports (evita importaciones por defecto si no es necesario)
      'import/prefer-default-export': 'off',  // Desactiva la preferencia por exportaciones por defecto

      // 14. Preferencia por variables constantes cuando no cambian
      'prefer-const': 'error',  // Si una variable no cambia, debería declararse como 'const'

      // 15. Requiere que todos los parámetros de función tengan un tipo explícito
      '@typescript-eslint/explicit-module-boundary-types': 'warn',  // Advierte cuando los parámetros o funciones no tienen tipos explícitos
    },
  },
);

