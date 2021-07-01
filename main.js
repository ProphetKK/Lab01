const app = Vue.createApp({
    data() {
        return {
            product: 'Boots',
            description: 'Big size 3XL',
            image: './assets/images/socks_green.jpg',
            camt: 'https://www.camt.cmu.ac.th/',
            inStock: true,
            displayStockStatus: false,
            inventory: 0,
            onSale: false,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'Green', image: './assets/images/socks_green.jpg' },
                { id: 2235, color: 'Blue', image: './assets/images/socks_blue.jpg' }
            ],
            cart: 0
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateImage(variantImage) {
            this.image = variantImage
        },
        getStockStatus() {
            this.displayStockStatus = true
        }
    }
})