<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdatePostRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
                'author' => 'required|string',
                'title' => [
                    Rule::unique('posts', 'title')->ignore($this->post->id),
                    'required',
                    'string',
                    'max:255'
                ],
                'content' => 'required|string',
        ];
    }
}
