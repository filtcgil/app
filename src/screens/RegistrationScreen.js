import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default function RegistrationScreen({ navigation }) {
  const [form, setForm] = useState({
    email: '',
    nome: '',
    cognome: '',
    azienda: '',
    prodotto: '',
    qualifica: '',
    regione: '',
    impianto: ''
  });

  const handleChange = (key, value) => setForm({ ...form, [key]: value });

  const handleRegister = () => {
    // TODO: integrare Firebase Auth e permessi
    navigation.replace('Home');
  };

  return (
    <View style={{ flex:1, padding:20 }}>
      {Object.keys(form).map((key) => (
        <>
          <Text key={key}>{key}</Text>
          <TextInput key={key+'input'} value={form[key]} onChangeText={(text) => handleChange(key,text)} />
        </>
      ))}
      <Button title="Registrati" onPress={handleRegister} />
    </View>
  );
        }
