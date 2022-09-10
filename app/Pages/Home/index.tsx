import React, {useEffect, useState} from 'react';
import {View,Text, StyleSheet, Alert, Image, TouchableOpacity, TextInput} from 'react-native';
import { Menu, MenuItem, MenuDivider } from 'react-native-material-menu';
import { Ionicons } from '@expo/vector-icons';
import { useCart } from '../../hooks';
import { Login } from '../Login';
import { NavigationEvents } from 'react-navigation';
import api from '../../api/axios';
import CarouselCards from '../../components/Carousel';


interface FormData{
  nome:string;
}
interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

interface ProductFormatted extends Product {
  priceFormatted: string;
}

interface CartItemsAmount {
  [key: number]: number;
}


export const Home: React.FC = () => {
   
  const [visible, setVisible] = useState(false);

  const hideMenu = () => setVisible(false);

  const showMenu = () => setVisible(true);

  const [pesquisa, setPesquisa] = useState(''); 

  const [products, setProducts] = useState<ProductFormatted[]>([]);
  const { addProduct } = useCart();


  useEffect(() => {
    async function loadProducts() {
      const response = await api.get<Product[]>('/products');
      const receivedProducts = response.data;
      const formattedProducts = receivedProducts.map(product => ({
        ...product,
      } as ProductFormatted))

      setProducts(formattedProducts)
    }

    loadProducts();
  }, []);

  async function handleAddProduct(id: number) {
    await addProduct(id);
  }


  return (
    <View style={styles.Container}>
      <Text style ={styles.textoInit} >Seja Bem-Vindo</Text>
       <Menu style={styles.menu}
        visible={visible}
        anchor={
          <TouchableOpacity style ={styles.iconMenu} >
            <Ionicons name="menu" onPress={showMenu} color="#fb9400" size={25}/>
          </TouchableOpacity>
      }
        onRequestClose={hideMenu}
      >
        <MenuItem onPress={hideMenu}><Ionicons name="md-fast-food-outline" size={25}/> Cardapio</MenuItem>
        <MenuItem onPress={hideMenu}><Ionicons name="basket-outline" size={25}/> Sacola</MenuItem>
        <MenuItem onPress={hideMenu}><Ionicons name="heart-outline" size={25}/> Sacola</MenuItem>
        <MenuItem onPress={hideMenu}><Ionicons name="reader-outline" size={25}/> Sacola</MenuItem>
        <MenuItem onPress={hideMenu}><Ionicons name="settings-outline" size={25}/> Sacola</MenuItem>
        <MenuDivider />
        <MenuItem disabled><Ionicons name="exit-outline" size={25}/> Retorne</MenuItem>
      </Menu>
        <View style={styles.inputArea}>
            <TextInput 
                style={styles.input}
                placeholder="   pesquisa"
                value={pesquisa}
                onChangeText={setPesquisa}
            />
            <TouchableOpacity style ={styles.icon} >
                <Ionicons name="search" color="#fb9400" size={25}/>
            </TouchableOpacity>
        </View>
        <View>
          
        </View>
        <View >
          {products.map(product => (
            <li key={product.id}>
              <img src={product.image} alt={product.title} />
              <strong>{product.title}</strong>
              <span>{product.priceFormatted}</span>
              <button
                type="button"
                data-testid="add-product-button"
                onClick={() => handleAddProduct(product.id)}
              >
                <div data-testid="cart-product-quantity">
                  <Ionicons size={16} color="#FFF" />
                </div>

                <span>ADICIONAR AO CARRINHO</span>
              </button>
            </li>
          ))}
        </View>
    </View>

  );
};

const styles = StyleSheet.create({
  Container: {
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginStart:2,
    marginTop:"20%",
    width:'100%'
  },
  input:{
    height:54,
    width:'80%',
    fontSize:20,
    borderRadius:20,
    borderWidth:1,
    backgroundColor:'#fff',
    textAlign:'center',
    marginLeft:20,
  },
  inputArea:{
    width:'100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft:60,
  },
  icon:{
    width: '15%',
    height: 20,
    right:'80%',
    flexDirection:'row-reverse',
    justifyContent: 'center',
    alignItems:'center',

  },
  iconMenu:{
    width: '15%',
    marginLeft:"80%",
    marginHorizontal:"10%",
    flexDirection:'row',
    marginBottom:"8%",

  },
  button:{
    backgroundColor:'#fb9400',
    width: '80%',
    fontSize:'40%',
  },
  text:{
    marginBottom:20,
    marginTop:40,
    fontSize:20,
    flexDirection:'row',
    alignItems:'center'
  },
  menu:{
    flexDirection:'row',
    width:"100%",
    height:"80%",
  },
  link:{
    color:'#fb9400',

  },
  textoInit:{
    marginTop:"10%",
    top:30,
    left:20,
    fontSize:30,
    marginEnd:"50%"
  },
  ProductList:{
    
  }
});