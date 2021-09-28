<template>
    <section class="w-full bg-darker-blue py-36 bg-center bg-cover bg-no-repeat">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 flex">
        
        <div class="lg:w-3/6 lg:pr-0 pr-0 mt-10">
            <h1 class="font-medium text-5xl text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
            <p class="leading-relaxed mt-4 text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        
        <div class="lg:w-3/6 xl:w-2/5 md:w-full bg-gray-50 p-8 pr-20 pl-20 flex flex-col lg:ml-auto w-full mt-10 lg:mt-0 rounded-md">
            <div class="relative mb-4">
                <label for="full-name" class="leading-7 text-sm text-gray-600">Name</label>
                <input type="text" id="name" name="name" class="w-72 bg-white rounded-md border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-150 ease-in-out">
            </div>
            <div class="relative mb-4">
                <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
                <input type="email" id="email" name="email" class="w-full bg-white rounded-md border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-150 ease-in-out">
            </div>
            
            <div class="relative mb-4">
                <label for="email" class="leading-7 text-sm text-gray-600">Message</label>
                <textarea id="message" name="message" rows="4" class="w-full bg-white rounded-md border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-150 ease-in-out"> </textarea>
            </div>
            <button class="text-white bg-indigo-500 rounded-md border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 text-lg">Send Message</button>
        </div>
        <img
        class="h-auto w-4/12 z-0 absolute -mt-20"
        :src="require('@/assets/globus.png')"
        alt=""
      />
    </div>
</section>
</template>