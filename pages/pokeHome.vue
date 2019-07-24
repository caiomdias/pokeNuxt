<template>
    <p>TEST POKEHOME {{ currentPokemon.name }}</p>
</template>

<script>
import axios from 'axios';

export default {
    async asyncData() {
        try {
            const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/pikachu')
            console.log('test1', data)            
            return {
                currentPokemon: data
            }
        } catch (err) {
            console.error(err);
        }
                
    }
}
</script>
