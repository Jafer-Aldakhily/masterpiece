<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Session;

class AdminAuthController extends Controller
{
    // public function __construct()
    // {
    //     $this->middleware('guest')->except('logout');
    //     $this->middleware('guest:admin')->except('logout');
    // }
    public function getLogin()
    {
        return view('auth.login');
    }

    public function postLogin(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);
        if (auth()->guard('admin')->attempt(['email' => $request->email,  'password' => $request->password])) {
            $user = auth()->guard('admin')->user();
            // dd($user);
            return redirect()->route('adminDashboard')->with('success', 'Welcome');
            // return redirect()->intended('/');
        } else {
            return back()->with('error', 'Whoops! invalid email and password.');
        }
    }

    public function adminLogout(Request $request)
    {
        auth()->guard('admin')->logout();
        Session::flush();
        Session::put('success', 'You are logout sucessfully');
        return redirect(route('adminLogin'));
    }


    public function test(Request $request)
    {
        return redirect(route('testRestult'))->with('message', "Test message is $request->text");
    }

    public function testView()
    {
        // if (session()->has('message')) {
        //     return view('testResult')->with('message', session()->get('message'));
        // } else {
        //     dd("session is invalid");
        // }
        return view('testResult');
    }
}
