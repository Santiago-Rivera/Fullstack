import _ "mo:base/Debug";
import Principal "mo:base/Principal";

persistent actor class NFT (name: Text, owner: Principal, content: [Nat8]) = this {
  
  private transient let itemName = name;
  private transient var nftOwner = owner;
  private transient let imageBytes = content;

  public query func getName() : async Text{
    return itemName;
  };

  public query func getOwner() : async Principal {
    return nftOwner;
  };

  public query func getAsset() : async [Nat8] {
    return imageBytes;
  };

  public query func getCanisterId() : async Principal {
    return Principal.fromActor(this);
  };

  public shared(msg) func transferOwnership(newOwner: Principal) : async Text {
    if (msg.caller == nftOwner) {
      nftOwner := newOwner;
      return "Success";
    } else {
      return "Error: Not initated by NFT Owner."
    }
  }

};