import React from 'react';
import { BookOpen, Search, ShoppingBag, Menu, ChevronRight, Heart} from 'lucide-react';
import { Link } from "react-router-dom";

const DailyUi_3 = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col">
      <header className="border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <BookOpen className="h-8 w-8" />
            <span className="font-serif text-2xl tracking-tight">Libretto</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to='/'>  <a href="#" className="font-medium hover:text-gray-600 transition-colors">Home</a></Link>
            <a href="#" className="font-medium hover:text-gray-600 transition-colors">Books</a>
            <a href="#" className="font-medium hover:text-gray-600 transition-colors">Authors</a>
            <a href="#" className="font-medium hover:text-gray-600 transition-colors">Events</a>
            <a href="#" className="font-medium hover:text-gray-600 transition-colors">About</a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Search className="h-5 w-5" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <ShoppingBag className="h-5 w-5" />
            </button>
            <button className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gray-100 py-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 leading-tight">Discover worlds within pages</h1>
            <p className="text-xl text-gray-700 mb-8 max-w-lg">Explore our curated collection of timeless classics and contemporary masterpieces.</p>
            <div className="flex space-x-4">
              <button className="px-6 py-3 bg-black text-white font-medium rounded-md hover:bg-gray-800 transition-colors">
                Browse Collection
              </button>
              <button className="px-6 py-3 border border-black font-medium rounded-md hover:bg-gray-100 transition-colors flex items-center">
                New Releases <ChevronRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Stack of books" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-black rounded-full"></div>
                  <p className="font-medium">Over 10,000 titles</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Books */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-serif font-bold">Featured Books</h2>
            <a href="#" className="flex items-center text-gray-700 hover:text-black transition-colors">
              View all <ChevronRight className="ml-1 h-4 w-4" />
            </a>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[
              {
                title: "The Silent Echo",
                author: "Eleanor Hayes",
                cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                price: "$24.99"
              },
              {
                title: "Midnight's Reflection",
                author: "James Thornton",
                cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                price: "$19.99"
              },
              {
                title: "The Lost Garden",
                author: "Sophia Chen",
                cover: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                price: "$22.50"
              },
              {
                title: "Whispers in the Dark",
                author: "Marcus Reid",
                cover: "https://images.unsplash.com/photo-1531901599143-df8c80d0cf1f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                price: "$18.75"
              }
            ].map((book, index) => (
              <div key={index} className="group">
                <div className="relative mb-4 overflow-hidden rounded-lg">
                  <img 
                    src={book.cover} 
                    alt={book.title} 
                    className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                    <Heart className="h-4 w-4" />
                  </button>
                </div>
                <h3 className="font-serif font-bold text-xl mb-1">{book.title}</h3>
                <p className="text-gray-600 mb-2">{book.author}</p>
                <p className="font-medium">{book.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold mb-4">Join Our Literary Journey</h2>
            <p className="text-gray-700 mb-8">Subscribe to our newsletter and be the first to know about new releases, author events, and exclusive offers.</p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              />
              <button className="px-6 py-3 bg-black text-white font-medium rounded-md hover:bg-gray-800 transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-12 mt-auto">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <BookOpen className="h-6 w-6" />
                <span className="font-serif text-xl">Libretto</span>
              </div>
              <p className="text-gray-600 mb-4">Your destination for literary excellence since 2010.</p>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Explore</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Books</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Authors</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Genres</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black transition-colors">New Releases</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-black transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Contact</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Careers</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Press</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Help</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Shipping & Returns</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black transition-colors">FAQ</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-200 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 mb-4 md:mb-0">© 2025 Libretto. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-black transition-colors">Instagram</a>
              <a href="#" className="text-gray-600 hover:text-black transition-colors">Twitter</a>
              <a href="#" className="text-gray-600 hover:text-black transition-colors">Facebook</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default DailyUi_3;