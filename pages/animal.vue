<script setup>
    import { doc, onSnapshot, getDoc, updateDoc } from "firebase/firestore";

    // Server Side
    const { data: serverData } = useFetch('/api/animal');

    // Client Side
    const clientData = ref({})

    onMounted(async() => {
        const { firestore } = useFirebase();
        const docRef = doc(firestore, `animals`, 'dog');
        onSnapshot(docRef, (snap) => {
            clientData.value = snap.data();
            // serverData.value = snap.data();
        });
    });

    const updateAnimal = async() => {
        const { firestore } = useFirebase();
        const docRef = doc(firestore, `animals`, 'dog');
        await updateDoc(docRef, {
            age: Math.floor(Math.random() * 1000),
        });
    }
</script>

<template>
    <div>
        <h2>Server</h2>
        <pre>{{ serverData }}</pre>
        <h2>Client</h2>
        <pre>{{ clientData }}</pre>
        <button @click="updateAnimal">Update dog</button>
    </div>
</template>