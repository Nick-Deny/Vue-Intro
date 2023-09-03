// Creates a vue App - Object that is a root component - Component that controls the "app section"
const app = Vue.createApp({
    // data, functions
    //Template can be done direclty in the "app" component of the HTML -> but we can output dynamic data
    // template: '<h2>I am the template</h2>'

    // Shorthand for a function within an object 
    data() {
        return {
            url: "https://nicolasdenysenko.ca",
            showBooks: true,
            title: 'The Final Empire',
            author: 'Brandon Sanderson',
            age: '45',
            x: 0,
            y: 0,
            books: [
                {title: 'name of the wind', author: 'patrick rothfuss', isFav: true},
                {title: 'the way of kings', author: 'brandon sanderson', isFav: false},
                {title: 'the final empire', author: 'brandon sanderson', isFav: true},
            ],
        }
    },
    methods: {
        toggleShowBooks(){
            // Good way to toggle on/off
            this.showBooks = !this.showBooks
        },
        
        toggleFav(book) {
            book.isFav = !book.isFav
        },

        // Runs whenever we click "change title"
        changeTitle(newTitle) {
            // Have to use "this" to reference the component itself
            // this.title = 'Words of Randiance'
            this.title = newTitle
        },

        handleEvent(e, data) {
            console.log(e, e.type)
            if (data) {
                console.log(data)
            }
        },
        handleMousemove(e) {
            this.x = e.offsetX
            this.y = e.offsetY
        }
    },
    computed: {
        filteredBooks() {
            return this.books.filter((book) => book.isFav)
        }
    }
})

// "mount" tells the app at what point or where in DOM to mount this application (the control)
// This will mount to a div with a class of "app" (same selectors as Classes/ID's)
app.mount('#app')