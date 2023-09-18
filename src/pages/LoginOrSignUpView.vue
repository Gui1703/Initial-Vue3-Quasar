<script lang="ts" setup>
import { loginSchema, signUpSchema } from 'src/models'
import { useLoginOrSignUp } from 'src/composables'
import { useRoute } from 'vue-router'
import MInput from 'components/admin/inputs/MInput.vue'
import MInputPassword from 'components/admin/inputs/MInputPassword.vue'
import FormLayout from 'layouts/admin/FormLayout.vue'
import MButton from 'components/buttons/MButton.vue'

const route = useRoute()
const { form, loading, loginOrSignUp, submit } = useLoginOrSignUp()
</script>

<template>
  <q-page class="column items-center justify-evenly q-px-sm">
    <q-card class="column items-center container-login">
      <span class="text-h4 q-pb-sm">
        {{ loginOrSignUp(route.name === 'login-admin') }}
      </span>

      <FormLayout
        :title="loginOrSignUp(route.name === 'login-admin')"
        :schema="
          loginOrSignUp(route.name === 'login-admin') === 'Sign Up' ||
          loginOrSignUp(route.name === 'login-admin') === 'Cadastrar-se'
            ? signUpSchema()
            : loginSchema()
        "
        @submit="submit"
        form-login-or-sign-up
      >
        <template #content-user>
          <q-card-section class="column">
            <MInput
              name="email"
              v-model="form.email"
              label="E-mail"
              formLoginOrSignUp
            />
            <MInputPassword
              name="password"
              v-model="form.password"
              :label="$t('form.password')"
            />
            <MInputPassword
              v-if="
                loginOrSignUp(route.name === 'login-admin') === 'Sign Up' ||
                loginOrSignUp(route.name === 'login-admin') === 'Cadastrar-se'
              "
              name="passwordConfirmation"
              v-model="form.confirmPassword"
              :label="$t('form.confirmPassword')"
            />
            <router-link
              :to="
                loginOrSignUp(route.name === 'login-admin') === 'Login'
                  ? 'sign-up'
                  : 'login'
              "
              class="text-right q-pb-sm"
            >
              {{ loginOrSignUp(route.name !== 'login-admin') }}
            </router-link>

            <m-button
              :label="$t('buttons.submit')"
              :loading="loading"
              text-color="white"
              type="submit"
            />
          </q-card-section>
        </template>
      </FormLayout>
    </q-card>
  </q-page>
</template>
