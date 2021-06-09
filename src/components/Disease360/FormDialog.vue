<template>
  <el-form ref="searchDialogForm" :model="searchDialogForm" label-width="80px">
    <el-form-item label="临床分期">
      <el-radio-group v-model="searchDialogForm.theme">
        <el-radio
          v-for="item in searchDataList"
          :key="item.value"
          :label="item.value"
          >{{ item.label }}</el-radio
        >
        <!-- <el-radio label="TNM"></el-radio>
        <el-radio label="转移"></el-radio>
        <el-radio label="BP"></el-radio>
        <el-radio label="HR"></el-radio>
        <el-radio label="T"></el-radio>
        <el-radio label="P"></el-radio> -->
      </el-radio-group>
    </el-form-item>
    <el-button type="success" @click="ONADDSEARCHITEM('search')"
      >确定</el-button
    >
  </el-form>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapState({
      searchDialogForm: state => state.disease360.searchDialogForm,
      searchDataList: state => state.disease360.searchDataList
    })
  },
  watch: {
    // 监听选择后的值
    searchDialogForm: {
      deep: true,
      handler (val) {
        // 取的value值
        console.log(val.theme)
        const data = val.theme.split('-')
        this.SEARCHDATAINDEX(data[0])
      }
    }
  },
  data () {
    return {
      // searchDataList: [
      //   {
      //     label: 'TNM',
      //     value: 'TNM'
      //   },
      //   {
      //     label: '转移',
      //     value: '转移'
      //   },
      //   {
      //     label: 'BP',
      //     value: 'BP'
      //   },
      //   {
      //     label: 'HR',
      //     value: 'HR'
      //   },
      //   {
      //     label: 'T',
      //     value: 'T'
      //   },
      //   {
      //     label: 'P',
      //     value: 'P'
      //   }
      // ]
    }
  },
  mounted () {},
  methods: {
    ...mapMutations({
      ONADDSEARCHITEM: 'disease360/ONADDSEARCHITEM',
      SEARCHDATAINDEX: 'disease360/SEARCHDATAINDEX'
    })
  }
}
</script>

<style lang="scss" scoped></style>
