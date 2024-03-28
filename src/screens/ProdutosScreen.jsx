import React, { useEffect, useState } from "react";
import { Image, ScrollView, View, FlatList } from "react-native";
import { Button, Text } from "react-native-paper";
import styles from "../config/styles";

export default function ProdutosScreen() {
  const [produtos, setProdutos] = useState([]);
  const [categoria, setCategoria] = useState("");
  const [categorias, setCategorias] = useState([]);

  const pegarCategorias = async () => {
    const categorias = await fetch("https://dummyjson.com/products/categories");
    const retorno = await categorias.json();
    setCategorias(retorno);
    console.log(retorno);
  };

  useEffect(() => {
    fetchProducts();
    pegarCategorias();
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [categoria]);

  const fetchProducts = async () => {
    let url = categoria ? `https://dummyjson.com/products/category/${categoria}` : "https://dummyjson.com/products";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.products);
    setProdutos(await data.products);
  };

  return (
    <View style={styles.container}>
      <Text variant="titleLarge">Produtos</Text>
      <Text variant="bodyMedium">Confira a lista de produtos</Text>
      <ScrollView>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            flexWrap: "wrap",
          }}
        >
          {categorias.map((cat) => (
            <Button
              key={cat}
              onPress={() => setCategoria(cat)}
              mode="contained"
            >
              {cat}
            </Button>
          ))}

          <Button onPress={() => setCategoria("")}>Limpar Filtros</Button>
        </View>

        <FlatList
          data={produtos}
          numColumns={3}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={{ flex: 1, margin: 3, borderWidth: 3, borderColor: '#360b41', borderRadius: 7 }}>
              <Text variant="headlineMedium">{item.title}</Text>
              <Image
                source={{ uri: item.images[0] }}
                style={{ width: "100%", aspectRatio: 1, borderRadius: 5 }}
              />
            </View>
          )}
        />
      </ScrollView>
    </View>
  );
}
