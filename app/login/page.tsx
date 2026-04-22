'use client';

import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { loginAction } from '@/app/actions/authActions';
import { Button } from '@/components/ui/button';
import Input from '@/components/ui/input/Input';
import { FormProvider } from 'react-hook-form';
import { useState } from 'react';
import { customToast } from '@/app/components/common/ShowToast';

type LoginForm = {
  email: string;
  password: string;
};

export default function LoginPage() {
  const methods = useForm<LoginForm>();
  const router = useRouter();
  const [error, setError] = useState('');

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async (data: LoginForm) => {
    setError('');

    const res = await loginAction(data);

    if (res.success) {
      router.push('/admin/orders'); // useRouter used to redirect after login
    } else {
      setError(res.message || 'Login failed');
      customToast.error(res.message)
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="w-full max-w-md p-6 border rounded-xl bg-white shadow">
        <h2 className="text-xl font-semibold mb-4 text-center">
          Admin Login
        </h2>

        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

            <Input
            allowAsterisk
              label="Email"
              name="email"
              placeholder="Enter email"
              rules={{ required: 'Email is required' }}
            />

            <Input
            allowAsterisk
              type="password"
              label="Password"
              name="password"
              placeholder="Enter password"
              rules={{ required: 'Password is required' }}
            />

             {/* {error && (
              <p className="text-red-500 text-sm">{error}</p>
            )} */}

            <Button
              type="submit"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Logging in...' : 'Login'}
            </Button>
          </form>
        </FormProvider>
        <div>
        <p className="text-sm text-gray-500">
          Test Login: admin@test.com / 123456
        </p>
      </div>
      </div>
    </div>
  );
}
