<script lang="ts">
    // Make sure this points to your initialized Firestore db in your new project!
    import { db } from '$lib/firebase'; 
    import { doc, setDoc } from 'firebase/firestore';
    
    // Import your JSON data directly
    import canciones from '$lib/data/canciones.json';
    import oraciones from '$lib/data/oraciones.json';

    let isUploading = $state(false);
    let statusMessage = $state('');

    async function uploadData() {
        isUploading = true;
        statusMessage = 'Subiendo canciones...';

        try {
            // 1. Upload Canciones
            for (const canto of canciones) {
                // Using the canto's number as the document ID keeps the database clean and prevents duplicates
                const docRef = doc(db, 'canciones', canto.number.toString());
                await setDoc(docRef, canto);
            }

            statusMessage = 'Subiendo oraciones...';

            // 2. Upload Oraciones
            for (const oracion of oraciones) {
                const docRef = doc(db, 'oraciones', oracion.number.toString());
                await setDoc(docRef, oracion);
            }

            statusMessage = '¡Base de datos copiada con éxito! 🎉';
        } catch (error) {
            console.error("Error en la subida:", error);
            statusMessage = 'Error al subir: ' + error.message;
        } finally {
            isUploading = false;
        }
    }
</script>

<div style="padding: 50px; font-family: sans-serif;">
    <h1>Clonar Base de Datos</h1>
    <p>Haz clic en el botón para subir los archivos JSON a tu nuevo Firebase.</p>
    
    <button 
        onclick={uploadData} 
        disabled={isUploading}
        style="padding: 10px 20px; font-size: 16px; cursor: pointer; background-color: #6f4a27; color: white; border: none; border-radius: 5px;"
    >
        {isUploading ? 'Subiendo...' : 'Iniciar Subida'}
    </button>

    {#if statusMessage}
        <p style="margin-top: 20px; font-weight: bold; color: {statusMessage.includes('Error') ? 'red' : 'green'};">
            {statusMessage}
        </p>
    {/if}
</div>