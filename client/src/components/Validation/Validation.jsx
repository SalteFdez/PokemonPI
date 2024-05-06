export default function Validation(userData, errors, setErrors) {
    const errorsCopy = { ...errors };

    for (const value in userData) {
        switch (value) {
            case 'name':
                if (!userData.name.trim()) {
                    errorsCopy.name = 'El nombre es obligatorio';
                } else {
                    delete errorsCopy.name;
                }
                break;
            case 'health':
                if (!userData.health.trim() || isNaN(userData.health)) {
                    errorsCopy.health = 'La salud debe ser un número';
                } else {
                    delete errorsCopy.health;
                }
                break;
            case 'attack':
                if (!userData.attack.trim() || isNaN(userData.attack)) {
                    errorsCopy.attack = 'El ataque debe ser un número';
                } else {
                    delete errorsCopy.attack;
                }
                break;
            case 'defense':
                if (!userData.defense.trim() || isNaN(userData.defense)) {
                    errorsCopy.defense = 'La defensa debe ser un número';
                } else {
                    delete errorsCopy.defense;
                }
                break;
            case 'speed':
                if (userData.speed.trim() && isNaN(userData.speed)) {
                    errorsCopy.speed = 'La velocidad debe ser un número';
                } else {
                    delete errorsCopy.speed;
                }
                break;
            case 'height':
                if (userData.height.trim() && isNaN(userData.height)) {
                    errorsCopy.height = 'La altura debe ser un número';
                } else {
                    delete errorsCopy.height;
                }
                break;
            case 'weight':
                if (userData.weight.trim() && isNaN(userData.weight)) {
                    errorsCopy.weight = 'El peso debe ser un número';
                } else {
                    delete errorsCopy.weight;
                }
                break;
            default:
                break;
        }
    }

    setErrors(errorsCopy);
}
