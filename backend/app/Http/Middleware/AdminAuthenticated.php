<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AdminAuthenticated
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */

    // public function __construct()
    // {
    //     $this->middleware(function ($request, $next) {
    //         $this->user = Auth::user();
    //         return $next($request);
    //     });
    // }

    public function handle(Request $request, Closure $next)
    {
        // $this->middleware(function ($request, $next) {
        //     $this->user = Auth::user();
        //     return $next($request);
        // });

        if (auth()->guard('admin')->user()) {
            return $next($request);
        }
        return redirect()->route('adminLogin');
    }
}
