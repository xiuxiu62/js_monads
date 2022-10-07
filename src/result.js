export const Ok = (value) => new Result_(true, value);
export const Err = (error) => new Result_(false, error);

class Result_ {
  constructor(ok, value) {
      this.ok_ = ok;
      this.value_ = value;
    }

  is_ok() {
      return this.ok_; 
    }

  is_err() {
      return !this.ok_;
    }

  unwrap() {
      if (this.is_err()) {
          throw `Called Result::unwrap() on an \`Err\`, value: "${this.value}"`;
        } 
      
      return this.value_; 
    }

  match(ok_closure, err_closure) {
      if (this.ok_) {
          ok_closure(this.value_);
        }
  
      err_closure(this.value_);
    }
}

