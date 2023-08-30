<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\SignupRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    //
    public function signup(SignupRequest $request){

        /** @var \App\Models\User $user */

        $data=$request->validated();

        $user=User::create([ 
            'name'=>$data['name'],
            'email'=>$data['email'],
            'password'=>bcrypt($data['password']),
        ]);

        $token=$user->createToken('haha')->plainTextToken;

        return response([
            'user'=>$user,
            'token'=>$token
        ]);
    }

    public function login(LoginRequest $request){
        $credentials=$request->validated();
        $remember=$credentials['remember']??false; // if not exist, we give this prop false
        unset($credentials['remember']);

        if(!Auth::attempt($credentials,$remember)){ // if not logged in, then ....
            return response([
                'error'=>"the provided credential is not correct"
            ],422);
        };

        // if logged in,....
        /** @var User $user */
        $user=Auth::user();
        $token=$user->createToken('haha')->plainTextToken;

        return response([
            'user'=>$user,
            'token'=>$token
        ]);
    }
    
    public function logout(Request $request){

        /** @var User $user */
        $user=Auth::user();
        $user->currentAccessToken()->delete();

        return response([
            'success'=>true,
        ]);
        
    }
}
