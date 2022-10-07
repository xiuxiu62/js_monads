export const Some = (value) => new Option_(true, value);
export const None = (error) => new Option_(false, null);

class Option_ {
  constructor(some, value) {
      this.some_ = some;
      this.value_ = value;
    }

  is_some() {
      return this.some_; 
    }

  is_none() {
      return !this.some_;
    }

  unwrap() {
      if (this.is_some()) {
          throw `Called Option::unwrap() on \`None\``;
        } 
      
      return this.value_; 
    }

  match(some_closure, none_closure) {
      if (this.is_ok()) {
          some_closure(this.value_);
        }
  
      none_closure();
    }
}
  
