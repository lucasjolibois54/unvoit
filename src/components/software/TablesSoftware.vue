<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="flex flex-col">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div
          class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"
        >
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Name
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Title
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Status
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Amount
                </th>
                <th scope="col" class="relative px-6 py-3">
                  <span class="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200 ">
              <tr
                class="hover:bg-indigo-200 transition duration-300 ease-in-out"
                v-for="person in people"
                :key="person.email"
              >
                <td class="px-1 py-4 whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="flex-shrink-0 h-10 w-10">
                      <img
                        class="h-10 w-10 rounded-full"
                        :src="person.image"
                        alt=""
                      />
                    </div>
                    <div class="ml-4">
                      <div class="text-sm font-medium text-gray-900">
                        {{ person.name }}
                      </div>
                      <div class="text-sm text-gray-500">
                        {{ person.email }}
                      </div>
                    </div>
                  </div>
                </td>
                <td class="px-3 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">{{ person.title }}</div>
                  <div class="text-sm text-gray-500">
                    {{ person.department }}
                  </div>
                </td>
                <td class="px-5 py-4 whitespace-nowrap">
                  <span
                    class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
                  >
                    Active
                  </span>
                </td>
                <td class="px-5 py-4 whitespace-nowrap text-sm text-gray-500">
                  {{ person.amount }}
                </td>
                <td
                  class="px-3 py-4 whitespace-nowrap text-right text-sm font-medium"
                >
                  <a href="#" class="text-indigo-600 hover:text-indigo-900"
                    >Edit</a
                  >
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const people = [
  {
    name: "Andreas Erik Eriksen",
    title: "Senior Dictator of UNVOIT",
    department: "Optimization",
    amount: "$728.99",
    email: "andreas.eriksen@example.com",
    image: "https://avatars.githubusercontent.com/u/47341968?v=4",
  },
  {
    name: "Borat Sagdiyev",
    title: "Global ambassador for Kazakhstan",
    department: "Public Relations",
    amount: "$287",
    email: "borat.wuawua@example.com",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Borat_in_Cologne.jpg/220px-Borat_in_Cologne.jpg",
  },
  {
    name: "Eva Shaw",
    title: "Regional Sales",
    department: "Marketing",
    amount: "$872",
    email: "eva.shaw@example.com",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Jayden Hunt",
    title: "React Native Consultant",
    department: "Development",
    amount: "$3940",
    email: "jayden.hunt@example.com",
    image:
      "https://images.unsplash.com/photo-1583123810408-23e7b5d1af9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Julia Cunningham",
    title: "Chief Creative Officer",
    department: "Board of Members",
    amount: "$468",
    email: "julia.cunningham@example.com",
    image:
      "https://images.unsplash.com/photo-1596698472600-46fe5cb12624?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
];

export default {
  setup() {
    return {
      people,
    };
  },
};
</script>
