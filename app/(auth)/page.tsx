'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { ArrowRight } from 'lucide-react';
import { z } from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

import { useRouter } from 'next/navigation';

export default function Login() {
  const router = useRouter();

  const formSchema = z.object({
    email: z.string().trim().email().min(1, {
      message: 'Email is required'
    }),
    password: z.string().trim().min(1, {
      message: 'Password is required'
    })
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    router.push(`/dashboard?email=${values.email}`);
  };

  return (
    <main className="w-full min-h-[590px] h-auto max-w-full pt-10">
      <div className="w-full h-full p-5 rounded-md">
        <h1 className="text-xl tracking-[-0.16px] dark:text-[#fcfdffef] font-bold mb-1.5 mt-8 text-center sm:text-left">
          Log in
        </h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="mb-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="relative">
                    <FormLabel className="dark:text-[#f1f7feb5] text-sm">
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className="focus-visible:outline-none"
                      />
                    </FormControl>
                    <FormMessage className="absolute mt-0 mb-0" />
                  </FormItem>
                )}
              />
            </div>
            <div className="mb-6">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="relative">
                    <FormLabel className="dark:text-[#f1f7feb5] text-sm">
                      Password
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className="focus-visible:outline-none"
                      />
                    </FormControl>
                    <FormMessage className="absolute mt-0 mb-0" />
                  </FormItem>
                )}
              />
            </div>
            <Button
              className="w-full text-[15px] h-[40px] text-white font-semibold"
              type="submit"
            >
              Sign in
              <ArrowRight />
            </Button>
          </form>
        </Form>
      </div>
    </main>
  );
}
