🏠 Home
✅ Tipo de test: Render + Interacción
Tests:

 -Renderizar todos los componentes hijos (ProductsCard, BusinessSection, etc.).

 -Verificar que el contenido principal está presente (títulos, botones, FAQs, etc.).

 -Simular clics en links o productos si aplican interacciones.

 -Validar que los links redirigen correctamente si hay navegación (usando MemoryRouter).

🧙‍♂️ Wizard (Configurador)
✅ Tipo de test: Unit + Light Integration
Aquí hay más lógica y uso de contexto (WizardContext).

Tests:

 -Render del componente Wizard.

 -Render dinámico del StepComponent según currentStep (mockear stepsConfig si hace falta).

 -Verificar que los botones "Atrás" y "Siguiente" aparecen/desaparecen en el paso correcto.

 -Simular clics en los botones y verificar que se llama a goNextPage / goPrevPage.

 -Mock del contexto para validar flujo del paso a paso.

 -Validar el scroll al hacer currentStep update.

🧠 Extra: aquí puedes hacer tests del contexto de forma aislada (WizardContext) y en integración con Wizard.

🧮 TotalPrice
✅ Tipo de test: Lógica + Render condicional
Tests:

 -Render básico con total mostrado correctamente.

 -Clic en el botón "Me interesa" muestra el Modal.

 -Dentro del Modal, se renderiza el ContactForm.

 -Cierre del modal con handleCloseModal.

📄 ContactForm
✅ Tipo de test: Validaciones + Lógica de envío
Tests:

 -Validaciones del formulario (nombre corto, teléfono inválido, checkbox no marcado).

 -Mostrar mensajes de error si hay inputs inválidos.

 -Simular un envío válido y verificar que aparece la pantalla de "Gracias".

 -Simular el setTimeout para manejar el loading.

 -Validar que loading se muestra correctamente (loader activo).

🔁 AppRouter
✅ Tipo de test: Routing test
Tests:

 -Renderización de rutas básicas (/, /configura-tarifa).

 -Verificar que en cada ruta se renderiza el componente correcto.

 -Redirección a 404 si configuras una ruta inválida.

🧠 Contextos (CartContext, WizardContext)
✅ Tipo de test: Context unitario + integración
Tests: Unit test del Context:

 -Renderizar WizardProvider y verificar valores por defecto.

 -Llamar a goNextPage, goPrevPage y verificar cambios de currentStep.

 -Testear casos límite: paso inicial y paso final.

Integración:

 -Usar el contexto dentro del componente (Wizard, Cart, etc.).

 -Simular interacciones y verificar que el estado del contexto cambia.