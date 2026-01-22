import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input"
import { httpRequest } from "@/services/httpRequest"
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/schema/loginSchema"
import { useForm } from "react-hook-form"
import { useAuth } from "@/stores/authStore";


export function LoginModal({openLogin, closeLogin, setLoginSucess}) {
  const form = useForm({
    mode: "onChange",
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  })

  const {setToken} = useAuth(state => state);

  const onSubmit = async (data) => {
    try {
      const response = await httpRequest.post("/login", {
        email: data.email,
        password: data.password
      });
      const token = response.data;
      setToken(token);
      setLoginSucess({status: "success", message: "Login successfully"});
      closeLogin();
    } catch (error) {
      if(error === "Unauthorized") {
        setLoginSucess({status: "error", message: "Login failed"});
      } else {
        setLoginSucess({status: "error", message: "Login failed"});
      }
      setLoginSucess(false);
    }
  };

  return (
    <div>
      <Dialog open={openLogin} onOpenChange={closeLogin}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center">Đăng nhập</DialogTitle>
          </DialogHeader>
  
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="name@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
  
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mật khẩu</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="Nhập tối thiểu 6 ký tự" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
  
              <Button type="submit" className="w-full bg-web-orange hover:bg-orange-600">
                Đăng nhập
              </Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  )
}
