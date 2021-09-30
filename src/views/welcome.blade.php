<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
 
    <title>{{ config('app.name', 'Laravel') }}</title>
 
    <script src="{{ asset('js/app.js') }}" defer></script>
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<div id="app">
    <h1 class="font-bold text-2xl text-gray-900 ">Example Project</h1>
    <p class="mb-6">This is just a example text for my tutorial.</p>
 
    Show Modal
    </button>
    <card-modal :showing="exampleModalShowing" @close="exampleModalShowing = false">
    <h2 class="text-xl font-bold text-gray-900">Example modal</h2>
    <p>This is example text passed through to the modal via a slot.</p>
    <button
      class="bg-blue-600 text-white px-4 py-2 text-sm uppercase tracking-wide font-bold rounded-lg"
      @click="exampleModalShowing = false"
    >
      Close
    </button>
</card-modal>
    </div>
</body>
</html>