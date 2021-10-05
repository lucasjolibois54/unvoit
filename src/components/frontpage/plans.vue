<template>
  <div class="mt-36">
    <Card
      title="Starter"
      name="Starter version"
      description="
              - Unlimited postings
              - Invoices + invoice designer 
              - Bill managment 
              - VAT financial accountning
              - Full support 24/7 
              - Appenix`s in cloud 
              - All integrations 
              - Personal accountant"
      price="FREE&nbsp;&nbsp;&nbsp;&nbsp;"
    />

    <Card
      title="Proversion"
      name="Pro version"
      description="
              - Unlimited postings
              - Invoices + invoice designer 
              - Bill managment 
              - VAT financial accountning 
              - Full support 24/7 
              - Appenix`s in cloud 
              - All integrations 
              - Personal accountant
              - Blockchain technologies"
      price="79$/m&nbsp;"
    />

    <Card
      title="Proversion (-15%)"
      name="Pro version (-15%)"
      description="
              - Unlimited postings
              - Invoices + invoice designer 
              - Bill managment 
              - VAT financial accountning 
              - Full support 24/7 
              - Appenix`s in cloud 
              - All integrations 
              - Personal accountant
              - Blockchain technologies"
      price="805$/y"
    />
  </div>
</template>

<script>
import Card from "@/components/frontpage/Card.vue";

export default {
  components: {
    Card,
  },
};
</script>