<template>
  <div>
      <h2 class="text-lg p-2 font-zzz2">گزارش پرداخت</h2>

      <div class="font-zzz1 flex flex-col rounded-md border self-start gap-2 p-2 shadow-2xl w-full">
          <div class="flex justify-between">
<span v-if="payment.success" class="" >با موفقیت پرداخت شده است.</span>
<span v-else  class="" >پرداخت انجام نشده است.</span>
          </div>

      </div>
  </div>
</template>
<script>
import {mapGetters,mapActions,mapState} from "vuex";

export default {
  name: 'report',
    computed: {
        ...mapState("payment", ["payment"]),
    },
    methods:{
      ...mapActions("cart",["pay"])
    }
}
</script>
