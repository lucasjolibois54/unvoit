<template>
<div class="bg-darker-blue">
<div class="width-hero">
    <section class="w-full bg-darker-blue py-36 bg-center bg-cover bg-no-repeat">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 flex">
        
        <div class="lg:w-3/6 lg:pr-0 pr-0">
            <h1 class="font-medium text-5xl text-white">Send a request</h1>
            <p class="text-2xl leading-relaxed mt-10 text-white pr-60">
             Fill up the form and we will get back to you within 24 hours</p>
             <p class="flex mt-20 font-medium text-2xl text-white">
                 <img
            class="h-auto w-6 z-0 mr-6"
            :src="require('@/assets/phone.svg')"
             alt=""
            />
                 +45 12 34 56 78</p>
                 <p class="flex mt-20 font-medium text-2xl text-white">
                 <img
            class="h-auto w-6 z-0 mr-6"
            :src="require('@/assets/mail.svg')"
             alt=""
            />
                 Email@hotmail.com</p>
                 <div class="flex ml-10">
                 <img
            class="h-auto w-10 z-0 mt-20 mr-4"
            :src="require('@/assets/facebook.svg')"
             alt=""
            />

            <img
            class="h-auto w-14 z-0 mt-20"
            :src="require('@/assets/twitter.svg')"
             alt=""
            />
            <img
            class="h-auto w-10 z-0 mt-20 ml-4"
            :src="require('@/assets/instagram.svg')"
             alt=""
            />
            </div>
            
            
            
                
        </div>
        
        
        
        <div class="lg:w-3/6 xl:w-2/5 md:w-11/12 md:p-8 bg-gray-50 p-8 pr-20 pl-20 flex flex-col lg:ml-auto w-full mt-10 lg:mt-0 rounded-md">
            <div class="relative mb-4 md:mt-4">
                <label for="full-name" class="leading-7 text-sm text-gray-600">Name</label>
                <input type="text" id="name" name="name" class="w-full bg-white rounded-md border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-150 ease-in-out">
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
        class="h-auto w-4/12 z-0 absolute -mt-20 md:w-96 md:mt-2"
        :src="require('@/assets/globus.png')"
        alt=""
      />
    </div>
</section>
</div>
</div>
</template>

<style scoped>
.width-hero {
  max-width: 1500px;
  margin: 0 auto !important;
  float: none !important;
}
</style>